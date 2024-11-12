import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

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
]);

export default root;
