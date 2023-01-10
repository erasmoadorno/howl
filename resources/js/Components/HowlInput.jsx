import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/inertia-react";

export default function HowlInput({ edit = false, body = "", howl_id }) {
    const { data, setData, errors, reset, post, put } = useForm({ body });

    const submitHowl = (d) => {
        d.preventDefault();
        if (edit) {
            put(route("howls.update", howl_id));
        } else {
            post(route("howls.store"), { onSuccess: () => reset() });
        }
    };

    return (
        <div className="container  justify-center items-center mx-auto mt-8">
            <form action="" method="post" className="" onSubmit={submitHowl}>
                <div className="flex justify-center items-end">
                    <textarea
                        name=""
                        id=""
                        rows="6"
                        className="border border-howl_color-500 focus:shadow-[0px_0px_20px_-2px_#005a96] ring ring-transparent focus:ring-transparent resize-none w-1/2 max-[800px]:w-full rounded-md dark:bg-howl_color-800 dark:text-gray-300"
                        placeholder="Type to howl"
                        value={data.body}
                        onChange={(d) => setData("body", d.target.value)}
                    >
                        {data.body}
                    </textarea>
                </div>
                <div>
                    <div className="container flex w-1/2 max-[800px]:w-full m-auto">
                        <PrimaryButton
                            className="mt-2 h-12 w-40 justify-center rounded-full ml-auto"
                            type="submit"
                        >
                            Howl it
                        </PrimaryButton>
                    </div>
                    <div className="container m-auto mb-20 mt-2 flex w-1/2 max-[800px]:w-full">
                        {errors.body ? (
                            <div className="container m-auto bg-red-500 bg-opacity-60 text-black dark:text-gray-200 text-center">
                                <p>{errors.body}</p>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}
