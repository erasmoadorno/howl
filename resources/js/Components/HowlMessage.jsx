import Dropdown from "./Dropdown";

export default function HowlMessage({ howls, auth }) {
    return (
        <>
            <div>
                {howls.map((howl) => (
                    <div className="p-5 mt-5 container m-auto border-l border-r border-howl_color-500 bg-howl_color-50 dark:text-gray-200 dark:rounded bg-slate-100 dark:bg-howl_color-800 h-full flex flex-wrap">
                        <div className="pb-5">
                            <p key={howl.id}>{howl.body}</p>
                        </div>
                        <hr />
                        <div className="dark:text-gray-400 text-gray-700 ml-auto flex flex-wrap text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 mr-1 inline-block mb-1"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>

                            {howl.user.name}
                            <span className="hidden min-[400px]:inline-block">
                                <span className="ml-2 text-sm">
                                    {howl.updated_at != howl.created_at
                                        ? "(edited)"
                                        : ""}
                                </span>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="ml-2 mr-1 mb-1 w-5 h-5 inline-block"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </span>
                                {new Date(howl.updated_at).getHours() < 10
                                    ? "0" + new Date(howl.updated_at).getHours()
                                    : new Date(howl.updated_at).getHours()}
                                :
                                {new Date(howl.updated_at).getMinutes() < 10
                                    ? "0" +
                                      new Date(howl.updated_at).getMinutes()
                                    : new Date(howl.updated_at).getMinutes()}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="mb-1 ml-2 mr-1 w-4 h-4 inline-block"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                    />
                                </svg>
                                {new Date(howl.updated_at).toLocaleDateString()}
                            </span>
                        </div>
                        {howl.user.id == auth ? (
                            <span className="pl-3 max-[580px]:ml-auto">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button className=" hover:bg-howl_color-500 hover:text-gray-200 rounded-full">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                                />
                                            </svg>
                                        </button>
                                    </Dropdown.Trigger>
                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            className=""
                                            href={"/edit/" + howl.id}
                                        >
                                            Edit
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            as={"button"}
                                            href={route(
                                                "howls.destroy",
                                                howl.id
                                            )}
                                            method={"delete"}
                                        >
                                            Delete
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
