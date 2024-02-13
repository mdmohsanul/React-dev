import React from "react";

const Button = ({ onClick = () => {}, name, icon }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="flex items-center justify-center gap-2 border border-[#e5e5ee] rounded-3xl px-4 py-2 shadow-md"
      >
        {name}
        <span>{icon}</span>
      </button>
    </>
  );
};

export default Button;
