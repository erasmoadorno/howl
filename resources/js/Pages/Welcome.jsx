import { Head } from "@inertiajs/inertia-react";
import { useState } from "react";
import Navbar from "@/Layouts/Navbar";
import HowlInput from "@/Components/HowlInput";

import HowlMessage from "@/Components/HowlMessage";

export default function Welcome(props) {
    const [noturn, setnoturn] = useState(localStorage.getItem("colorMode"));

    return (
        <main className={noturn}>
            <div className="h-full bg-slate-50 dark:bg-gray-900 dark:text-blue-50 transition duration-500">
                <Head>
                    <title>Home</title>
                    <link rel="shortcut icon" href="favicon.ico"></link>
                </Head>
                <Navbar
                    colormode={noturn}
                    setcolormode={setnoturn}
                    auth={props.auth}
                ></Navbar>
                {props.auth.user ? (
                    <div>
                        <HowlInput></HowlInput>
                    </div>
                ) : (
                    ""
                )}

                <div>
                    <HowlMessage howls={props.howls} />
                </div>
            </div>
        </main>
    );
}
