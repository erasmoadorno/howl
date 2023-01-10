export default function Checkbox({ name, value, handleChange }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="rounded border-gray-300 text-howl_color-400 shadow-sm focus:ring-howl_color-400"
            onChange={(e) => handleChange(e)}
        />
    );
}
