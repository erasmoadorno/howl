export default function PrimaryButton({ type = 'submit', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `inline-flex items-center px-4 py-2 bg-howl_color-500 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-howl_color-400 focus:bg-howl_color-400 active:bg-howl_color-400 dark:bg-howl_color-800 dark:hover:bg-howl_color-400 active:dark:bg-howl_color-400 focus:outline-none focus:ring-2 focus:ring-howl_color-400 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    processing && 'opacity-25'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
