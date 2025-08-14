export default function FormInput({
  label,
  type = "text",
  value,
  onChange,
  name,
  placeholder,
  required = false,
}) {
  return (
    <label className="block mb-4">
      <span className="block text-sm font-medium text-gray-700 mb-1">{label}</span>
      <input
        className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}
