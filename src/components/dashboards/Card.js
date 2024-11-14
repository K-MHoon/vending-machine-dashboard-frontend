import React from "react";

const Card = ({ name, value, children }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white rounded-md">
            <div>
                <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                    {name}
                </h6>
                <span className="text-xl font-semibold">{value}</span>
            </div>
            <div>
                {/* ICON */}
                {children}
            </div>
        </div>
    );
};

export default Card;
