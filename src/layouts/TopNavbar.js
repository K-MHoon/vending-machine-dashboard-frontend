import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { FaBell, FaSearch } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TopNavbar = () => {
    return (
        <header className="relative bg-white">
            <div className="flex items-center justify-between p-2 border-b">
                <Link
                    to={"/"}
                    className="inline-block text-2xl font-bold tracking-wider uppercase text-emerald-800"
                >
                    K-MHOON
                </Link>
                <nav className="hidden space-x-3 md:flex md:items-center">
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" />
                        <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-emerald-400 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-emerald-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-400"></div>
                    </label>
                    <button className="p-3 bg-emerald-800 rounded-full w-[50px] h-[50px] text-white text-center">
                        <FaBell className="w-full h-full" />
                    </button>
                    <button className="p-3 bg-emerald-800 rounded-full w-[50px] h-[50px] text-white text-center">
                        <FaSearch className="w-full h-full" />
                    </button>
                    <button className="p-3 bg-emerald-800 rounded-full w-[50px] h-[50px] text-white text-center">
                        <AiOutlineSetting className="w-full h-full" />
                    </button>
                    <button className="p-3 bg-emerald-800 rounded-full w-[50px] h-[50px] text-white text-center">
                        <FaUserLarge className="w-full h-full" />
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default TopNavbar;
