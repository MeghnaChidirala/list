"use client";

import { useState } from "react";

interface InputFieldProps {
  addTask: (text: string) => void;
}

const InputField = ({ addTask }: InputFieldProps) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask(input);
      setInput("");
    }
  };

  return (
    <div className="flex mb-4">
      <input
        className="border p-2 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task and press Enter"
      />
    </div>
  );
};

export default InputField;