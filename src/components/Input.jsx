function Input({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  required = false,
  minLength,
  icon 
}) {
  return (
    <div className="flex flex-col">
      <label className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition ${icon ? 'pl-10' : ''}`}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
        />
      </div>
    </div>
  );
}

export default Input;