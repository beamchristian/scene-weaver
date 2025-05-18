import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // The content inside the button
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className='px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-200' // Tailwind styling
      {...props} // Pass through any other button props (like onClick, disabled, etc.)
    >
      {children}
    </button>
  );
};

export default Button;
