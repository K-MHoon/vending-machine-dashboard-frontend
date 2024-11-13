import React from "react";

const ContentHeader = ({ title }) => {
    return (
        <div className="flex items-center justify-between px-4 py-4 border-b lg:py-6">
            <h1 className="text-2xl font-semibold">{title}</h1>
        </div>
    );
};

export default ContentHeader;
