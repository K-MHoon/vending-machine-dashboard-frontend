import React, { useState } from "react";

const initState = {
    email: "",
    pw: "",
};

const LoginComponent = () => {
    const [loginParam, setLoginParam] = useState({ ...initState });

    return <div></div>;
};

export default LoginComponent;
