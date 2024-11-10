import React from "react";
import LeftSidebar from "./LeftSidebar";
import TopNavbar from "./TopNavbar";

const BasicLayout = ({ children }) => {
    return (
        <div className="flex h-screen antialiased text-gray-900 bg-gray-100">
            <LeftSidebar />
            <div className="flex-1 h-full overflow-x-hidden overflow-y-auto">
                <TopNavbar />
                {children}
            </div>
        </div>
    );
};

export default BasicLayout;
