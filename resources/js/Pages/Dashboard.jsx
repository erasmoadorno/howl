import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Navbar";
import { useState } from "react";
import HowlMessage from "@/Components/HowlMessage";

export default function Dashboard(props) {
    const [noturn, setnoturn] = useState(localStorage.getItem("colorMode"));

    return (
        <main className={noturn}>
            <div className="h-screen bg-cover bg-slate-100 dark:bg-gray-900 dark:text-blue-50 transition duration-500">
                <Navbar
                    colormode={noturn}
                    setcolormode={setnoturn}
                    auth={props.auth}
                ></Navbar>
                <Head title="Dashboard" />

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-xl sm:rounded-lg">
                            <div className="p-6 text-gray-900 dark:text-gray-300">
                               Welcome {props.auth.user.name}. Here you can edit or delete your posts!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-auto bg-slate-100 dark:bg-gray-900 pb-16">
                    <HowlMessage howls={props.userHowls} auth={props.auth.user.id}></HowlMessage>
                    
                </div>
            </div>
            <div className="dark:bg-gray-900 place-self-end"></div>
        </main>
    );
}
