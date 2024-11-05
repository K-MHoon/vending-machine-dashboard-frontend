import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

const LeftSidebar = () => {
    const [selectedMenuNumber, setSelectedMenuNumber] = useState(0);
    return (
        <aside className="flex-shrink-0 hidden w-64 bg-slate-800 border-r md:block">
            <div className="flex flex-col h-full">
                <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
                    <div>
                        <div
                            to={"/"}
                            className={
                                "flex item-center p-2 text-gray-200 font-bold rounded-md " +
                                (selectedMenuNumber === 0
                                    ? "text-emerald-400 bg-gray-600/50"
                                    : "")
                            }
                            onClick={() => setSelectedMenuNumber(0)}
                        >
                            <MdDashboard />
                            <span className="ml-2 mt-[-0.15rem] text-sm">
                                Dashboards
                            </span>
                        </div>
                        <div
                            to={"/"}
                            className={
                                "flex item-center p-2 text-gray-200 font-bold rounded-md " +
                                (selectedMenuNumber === 1
                                    ? "text-emerald-400 bg-gray-600/50"
                                    : "")
                            }
                            onClick={() => setSelectedMenuNumber(1)}
                        >
                            <TbReportAnalytics />
                            <span className="ml-2 mt-[-0.15rem] text-sm">
                                Reports
                            </span>
                        </div>
                        <hr className="my-2 border-gray-200/30 " />
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default LeftSidebar;
