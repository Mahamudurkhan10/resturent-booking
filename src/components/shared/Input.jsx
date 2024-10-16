import React from "react";

export default function Input({ label, type, className, onBlur }) {
  return (
    <div>
      <label htmlFor="" className="text-xl">
        {label}
      </label>{" "}
      <br />
      <input
        type={type}
        onBlur={onBlur}
        required
        className={`${className} border w-full py-2 rounded`}
      />
    </div>
  );
}
