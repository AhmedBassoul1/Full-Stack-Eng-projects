import { useState } from "react";
interface AddNewTodoProps {
  onSubmit(title: string): void;
}

export default function AddNewTodo({ onSubmit }: AddNewTodoProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;

    onSubmit(input);
    setInput("");
  }

  return (
    <div className="flex items-center justify-between border p-4 rounded-md mb-2">
      <form className="w-full flex gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new todo"
          className="border p-2 rounded-md flex-1"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}