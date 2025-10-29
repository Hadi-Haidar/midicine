function Button({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  disabled = false,
  fullWidth = false 
}) {
  const baseClasses = "px-6 py-3 rounded-lg font-bold text-lg transition-all transform hover:scale-105";
  
  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400",
    secondary: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-green-600",
    outline: "bg-white text-green-600 border-2 border-green-600 hover:bg-green-600 hover:text-white"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${widthClass} disabled:cursor-not-allowed disabled:transform-none`}
    >
      {children}
    </button>
  );
}

export default Button;