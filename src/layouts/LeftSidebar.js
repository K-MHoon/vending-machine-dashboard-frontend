import React, { useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import {
    FaCalendarDay,
    FaTag,
    FaTruckMoving,
    FaUserAstronaut,
} from "react-icons/fa";
import { FaLocationDot, FaTableList } from "react-icons/fa6";
import { GiVendingMachine } from "react-icons/gi";
import { HiMiniBellAlert } from "react-icons/hi2";
import { IoIosHelpCircle } from "react-icons/io";
import {
    MdCategory,
    MdDashboard,
    MdEngineering,
    MdFeedback,
} from "react-icons/md";
import { PiBuildingApartment } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";

const LeftSidebar = () => {
    const [selectedMenu, setSelectedMenu] = useState("Dashboards");
    return (
        <aside className="flex-shrink-0 hidden w-64 bg-slate-800 border-r md:block">
            <div className="flex flex-col h-full">
                <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "Dashboards"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("Dashboards")}
                    >
                        <MdDashboard />
                        <span className="ml-2 mt-[-0.15rem] text-sm">
                            Dashboards
                        </span>
                    </div>
                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "Reports"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("Reports")}
                    >
                        <TbReportAnalytics />
                        <span className="ml-2 mt-[-0.15rem] text-sm">
                            Reports
                        </span>
                    </div>
                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "Alerts"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("Alerts")}
                    >
                        <HiMiniBellAlert />
                        <span className="ml-2 mt-[-0.15rem] text-sm">
                            Alerts
                        </span>
                    </div>

                    <hr className="my-2 border-gray-200/30 " />

                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "Trips"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("Trips")}
                    >
                        <FaCalendarDay />
                        <span className="ml-2 mt-[-0.15rem] text-sm">
                            Trips
                        </span>
                    </div>
                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "Pick Lists"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("Pick Lists")}
                    >
                        <FaTableList />
                        <span className="ml-2 mt-[-0.15rem] text-sm">
                            Pick Lists
                        </span>
                    </div>
                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "Scheduled Visits"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("Scheduled Visits")}
                    >
                        <FaTruckMoving />
                        <span className="ml-2 mt-[-0.15rem] text-sm">
                            Scheduled Visits
                        </span>
                    </div>

                    <hr className="my-2 border-gray-200/30 " />

                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "Vendors"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("Vendors")}
                    >
                        <PiBuildingApartment />
                        <span className="ml-2 mt-[-0.15rem] text-sm">
                            Vendors
                        </span>
                    </div>
                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "Locations"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("Locations")}
                    >
                        <FaLocationDot />
                        <span className="ml-2 mt-[-0.15rem] text-sm">
                            Locations
                        </span>
                    </div>

                    <hr className="my-2 border-gray-200/30 " />

                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "Categories"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("Categories")}
                    >
                        <MdCategory />
                        <span className="ml-2 mt-[-0.15rem] text-sm">
                            Categories
                        </span>
                    </div>
                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "Products"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("Products")}
                    >
                        <FaTag />
                        <span className="ml-2 mt-[-0.15rem] text-sm">
                            Products
                        </span>
                    </div>
                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "Vending Machines"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("Vending Machines")}
                    >
                        <GiVendingMachine />
                        <span className="ml-2 mt-[-0.15rem] text-sm">
                            Vending Machines
                        </span>
                    </div>

                    <hr className="my-2 border-gray-200/30 " />

                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "DeliveryMan"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("DeliveryMan")}
                    >
                        <FaUserAstronaut />
                        <span className="ml-2 mt-[-0.15rem] text-sm">
                            DeliveryMan
                        </span>
                    </div>
                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "Engineer"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("Engineer")}
                    >
                        <MdEngineering />
                        <span className="ml-2 mt-[-0.15rem] text-sm">
                            Engineer
                        </span>
                    </div>
                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "Manager"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("Manager")}
                    >
                        <AiOutlineUsergroupAdd />
                        <span className="ml-2 mt-[-0.15rem] text-sm">
                            Manager
                        </span>
                    </div>

                    <hr className="my-2 border-gray-200/30 " />

                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "Help"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("Help")}
                    >
                        <IoIosHelpCircle />
                        <span className="ml-2 mt-[-0.15rem] text-sm">Help</span>
                    </div>
                    <div
                        to={"/"}
                        className={
                            "flex item-center p-2 font-bold cursor-pointer rounded-md " +
                            (selectedMenu === "Feedback"
                                ? "text-emerald-400 bg-gray-600/50"
                                : "text-gray-200")
                        }
                        onClick={() => setSelectedMenu("Feedback")}
                    >
                        <MdFeedback />
                        <span className="ml-2 mt-[-0.15rem] text-sm">
                            Feedback
                        </span>
                    </div>
                </nav>
            </div>
        </aside>
    );
};

export default LeftSidebar;
