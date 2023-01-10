import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className=''>

        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-howl_color-700 dark:text-gray-300">
            <div>

            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg dark:bg-howl_color-600 ">
                {children}
            </div>
        </div>
        </div>
    );
}
