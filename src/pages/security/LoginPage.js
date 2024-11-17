import { Box, TextField } from "@mui/material";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-gray-900 bg-gray-100">
            <div className="inline-block mb-6 text-3xl font-bold tracking-wider uppercase text-emerald-700">
                K-MHOON
            </div>
            <main>
                <div className="w-full max-w-sm px-4 py-6 space-y-6 bg-white rounded-md">
                    <h1 className="text-xl font-semibold text-center">
                        로그인
                    </h1>
                    <Box
                        component="form"
                        autoComplete="off"
                        className="space-y-6"
                    >
                        <TextField
                            className="w-full"
                            label="Email address"
                            type="email"
                            variant="outlined"
                        />
                        <TextField
                            className="w-full"
                            label="Password"
                            type="password"
                            autoComplete="off"
                            variant="outlined"
                        />
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <div className="relative inline-flex items-center">
                                    <input
                                        type="checkbox"
                                        value=""
                                        className="sr-only peer"
                                    />
                                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-emerald-400 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-emerald-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-400 cursor-pointer"></div>
                                </div>
                                <span className="ml-3 text-sm font-normal text-gray-500 dark:text-gray-400">
                                    Remember me
                                </span>
                            </label>
                            <Link
                                to={"#"}
                                className="text-sm text-blue-600 hover:underline font-semibold"
                            >
                                비밀번호 찾기
                            </Link>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 font-medium text-white transition-colors duration-200 rounded-md bg-emerald-700 hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1"
                            >
                                Login
                            </button>
                        </div>
                    </Box>
                    <div className="flex items-center justify-center space-x-2 flex-nowrap">
                        <span className="w-20 h-px bg-gray-300"></span>
                        <span>OR</span>
                        <span className="w-20 h-px bg-gray-300"></span>
                    </div>
                    <Link
                        to="#"
                        className="flex items-center justify-center px-4 py-2 space-x-2 text-white transition-all duration-200 bg-black rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1"
                    >
                        <FcGoogle className="size-6 mx-2" /> Login with Google
                    </Link>
                    <div className="text-sm text-gray-600">
                        계정이 없으신가요?
                        <Link
                            to={"#"}
                            className="px-2 text-blue-600 hover:underline font-semibold"
                        >
                            회원가입
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LoginPage;
