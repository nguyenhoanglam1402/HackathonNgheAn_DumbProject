import React from "react";
import { useFormContext } from "react-hook-form";

const InputField = ({ placeholder }) => {
  const {} = useFormContext();
  return (
    <div>
      <input
        className="input-field-style"
        type="number"
        name=""
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
