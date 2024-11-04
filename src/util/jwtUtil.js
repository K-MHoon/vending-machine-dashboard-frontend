import axios from "axios";
import { API_HOST } from "../api/info";
import { getCookie, setCookie } from "./cookieUtil";

const jwtAxios = axios.create();

const refreshJWT = async (accessToken, refreshToken) => {
    const host = API_HOST;
    const header = { headers: { Authorization: `Bearer ${accessToken}` } };
    const res = await axios.get(
        `${host}/api/service/refresh?refreshToken=${refreshToken}`,
        header
    );

    console.log("refresh Token = ", res.data);
    return res.data;
};

const beforeReq = (config) => {
    console.log("before request");

    const memberInfo = getCookie("member");

    if (!memberInfo) {
        console.log("Not Found member Token");
        return Promise.reject({
            response: {
                data: {
                    error: "REQUIRE_LOGIN",
                },
            },
        });
    }

    const { accessToken } = memberInfo;

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
};

const requestFail = (err) => {
    console.log("request fail");

    return Promise.reject(err);
};

const beforeRes = async (res) => {
    console.log("before return response");
    console.log(res);

    const data = res.data;

    if (data && data.error === "ERROR_ACCESS_TOKEN") {
        const memberCookieValue = getCookie("member");

        const result = await refreshJWT(
            memberCookieValue.accessToken,
            memberCookieValue.refreshToken
        );
        console.log("refreshJWT Result = ", result);

        memberCookieValue.accessToken = result.accessToken;
        memberCookieValue.refreshToken = result.refreshToken;

        setCookie("member", JSON.stringify(memberCookieValue), 1);

        const originalRequest = res.config;

        originalRequest.headers.Authorization = `Bearer ${result.accessToken}`;

        return await axios(originalRequest);
    }

    return res;
};

const responseFail = (err) => {
    console.log("resposne fail");
    return Promise.reject(err);
};

jwtAxios.interceptors.request.use(beforeReq, requestFail);
jwtAxios.interceptors.response.use(beforeRes, responseFail);

export default jwtAxios;
