import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import authRouter from "./authRouter";

const Loading = <div>Loading....</div>;
const Dashboards = lazy(() => import("../pages/dashboards/DashboardsPage"));

const root = createBrowserRouter([
    {
        path: "",
        element: (
            <Suspense fallback={Loading}>
                <Dashboards />
            </Suspense>
        ),
    },
    {
        path: "auth",
        children: authRouter(),
    },
]);

export default root;
