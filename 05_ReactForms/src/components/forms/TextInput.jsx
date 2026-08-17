import { useState } from "react";

function TextInput({ name, label, type }) {
  const [inputValue, setInputValue] = useState("");

  function handlechange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={inputValue}
        onChange={handlechange}
      />
      <p>Current value: {inputValue}</p>
    </div>
  );
}

export default TextInput;
