import React from "react";
import { useState } from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Navbar({ colormode, setcolormode, auth = "" }) {
    let activeWeb = window.document.location.pathname;
    const setDarkMode = () => {
        if (colormode == "light") {
            setcolormode("dark");
            localStorage.setItem("colorMode", "dark");
        } else {
            setcolormode("light");
            localStorage.setItem("colorMode", "light");
        }
    };
    
    const activeTabItem = "pt-3 sm:ml-4 flex py-3 justify-center items-center text-center border-b-2 border-white"
    const navTabItem = "pt-3 sm:ml-4 flex  py-3 justify-center items-center text-center  hover:px-1 hover:border-b border-white cursor-pointer"

    return (
        <nav>
            {auth.user ? (
                <ul className="bg-howl_color-500 dark:bg-howl_color-700 w-full grid grid-cols-4 lg:grid-cols-10 md:grid-cols-5 sm:grid-cols-4 text-white dark:text-gray-200 grid-rows-none py-2 flex-nowrap">
                    <Link
                        href="/"
                        className={
                            activeWeb == "/" ? activeTabItem : navTabItem 
                        }
                    >
                        <li>Home</li>
                    </Link>
                    <Link
                        href="/dashboard"
                        className={
                            activeWeb == "/dashboard"
                                ? activeTabItem
                                : navTabItem
                        }
                    >
                        <li>Dashboard</li>
                    </Link>
                    <Link
                        href={route("logout")}
                        method="post"
                        className={
                            activeWeb == "/logout"
                                ? activeTabItem
                                : navTabItem
                        }
                    >
                        <li>Logout</li>
                    </Link>
                    <li className="pt-1 py-3 sm:ml-4 flex justify-center items-center text-center hover:px-1 cursor-pointer">
                        <button
                            onClick={setDarkMode}
                            className="bg-black text-gray-50 rounded px-3 py-2 text-base mt-1 ml-1 dark:bg-slate-200 dark:text-black dark:hover:bg-white hover:bg-gray-800 hover:duration-500 duration-500"
                        >
                            {colormode == "light" ? "Dark mode" : "Light mode"}
                        </button>
                    </li>
                </ul>
            ) : (
                <ul className="bg-howl_color-500 dark:bg-howl_color-700 w-full grid grid-cols-4 lg:grid-cols-10 md:grid-cols-5 sm:grid-cols-4 text-white dark:text-gray-200 grid-rows-none py-2 flex-nowrap">
                    <Link
                        href="/"
                        className={
                            activeWeb == "/"
                                ? activeTabItem
                                : navTabItem
                        }
                    >
                        <li>Home</li>
                    </Link>
                    <Link
                        href="/login"
                        className={
                            activeWeb == "/login"
                                ? activeTabItem
                                : navTabItem
                        }
                    >
                        <li>Login</li>
                    </Link>
                    <Link
                        href="/register"
                        className={
                            activeWeb == "/register"
                                ? activeTabItem
                                : navTabItem
                        }
                    >
                        <li>Register</li>
                    </Link>
                    <li className="pt-1 py-3 sm:ml-4 flex justify-center items-center text-center hover:px-1 cursor-pointer">
                        <button
                            onClick={setDarkMode}
                            className="bg-black text-gray-50 rounded px-3 py-2 text-base mt-1 ml-1 dark:bg-slate-200 dark:text-black dark:hover:bg-white hover:bg-gray-800 hover:duration-500 duration-500"
                        >
                            {colormode == "light" ? "Dark mode" : "Light mode"}
                        </button>
                    </li>
                </ul>
            )}
        </nav>
    );
}
