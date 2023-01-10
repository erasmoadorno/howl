import HowlInput from "@/Components/HowlInput";
import { useState } from "react";
import Navbar from "@/Layouts/Navbar";

export default function Edit({ howl, auth }) {
    const [noturn, setnoturn] = useState(localStorage.getItem("colorMode"));


    return (
        <main className={noturn}>
            <Navbar
                colormode={noturn}
                setcolormode={setnoturn}
                auth={auth}
            ></Navbar>
            <div className="bg-slate-100 h-screen overflow-y-hidden dark:bg-gray-900">
                <HowlInput
                howl_id={howl.id}
                body={howl.body}
                edit={true}
                >

                </HowlInput>
               
            </div>
        </main>
    );
}
