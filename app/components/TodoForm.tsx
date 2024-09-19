"use client";

import { useState } from "react";

interface TodoFormProps {
  onAdd: (task: string) => void;
}

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [newTask, setNewTask] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    onAdd(newTask);
    setNewTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border text-black p-2 pl-4 pr-4 w-full rounded-full"
        placeholder="Add a new task..."
      />
      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded-full w-full"
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
