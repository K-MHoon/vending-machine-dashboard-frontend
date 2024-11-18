import React, { lazy, Suspense } from "react";

const Loading = <div>Loading....</div>;
const Login = lazy(() => import("../pages/security/LoginPage"));

const authRouter = () => {
    return [
        {
            path: "login",
            element: (
                <Suspense fallback={Loading}>
                    <Login />
                </Suspense>
            ),
        },
    ];
};

export default authRouter;
