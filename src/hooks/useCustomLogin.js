import { createSearchParams, Navigate, useNavigate } from "react-router-dom";
import { useRecoilState, useResetRecoilState } from "recoil";
import siginInState from "../atoms/signinState";
import { removeCookie, setCookie } from "../util/cookieUtil";
import { loginPost } from "../api/memberApi";

const useCustomLogin = () => {
    const navigate = useNavigate();

    const [loginState, setLoginState] = useRecoilState();

    const resetState = useResetRecoilState(siginInState);

    const isLogin = loginState.email ? true : false;

    const doLogin = async (loginParam) => {
        const result = await loginPost(loginParam);

        console.log(result);

        saveAsCookie(result);

        return result;
    };

    const saveAsCookie = (data) => {
        setCookie("auth", JSON.stringify(data), 1);
        setLoginState(data);
    };

    const doLogout = () => {
        removeCookie("auth");
        resetState();
    };

    const moveToPath = (path, replace) => {
        navigate({ pathname: path }, { replace: replace });
    };

    const moveToLogin = () => {
        navigate({ pathname: "/auth/login" }, { replace: true });
    };

    const moveToLoginReturn = () => {
        return <Navigate replace to="/auth/login" />;
    };

    const exceptionHandler = (ex) => {
        console.log("Exception");
        console.log(ex);

        const errorMsg = ex.response.data.error;
        const errorStr = createSearchParams({ error: errorMsg }).toString();

        if (errorMsg === "REQUIRE_LOGIN") {
            alert("로그인 해야 합니다.");
            navigate({ pathname: "/auth/login", search: errorStr });
            return;
        }

        if (errorMsg === "ERROR_ACCESS_DENIED") {
            alert("해당 메뉴를 사용할 수 있는 권한이 없습니다.");
            navigate({ pathname: "/auth/login", search: errorStr });
            return;
        }
    };

    return {
        loginState,
        isLogin,
        doLogin,
        doLogout,
        moveToPath,
        moveToLogin,
        moveToLoginReturn,
        exceptionHandler,
        saveAsCookie,
    };
};

export default useCustomLogin;
