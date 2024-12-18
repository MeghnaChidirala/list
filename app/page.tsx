"use client";

import { useState } from "react";
import TaskList from "../components/TaskList";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="p-4 min-h-screen bg-red-400 flex justify-center items-center">
      <div className="bg-white w-[800px] h-[500px] p-6 rounded-md shadow-md flex">
        {/* Sidebar */}
        <div className="w-1/4 border-r-2 pr-4">
          <h2 className="text-xl font-bold mb-4">All Tasks</h2>
          <ul className="space-y-2">
            <li
              className={`cursor-pointer ${
                filter === "all" ? "font-bold text-red-500" : ""
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </li>
            <li
              className={`cursor-pointer ${
                filter === "active" ? "font-bold text-red-500" : ""
              }`}
              onClick={() => setFilter("active")}
            >
              Active
            </li>
            <li
              className={`cursor-pointer ${
                filter === "completed" ? "font-bold text-red-500" : ""
              }`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </li>
          </ul>
        </div>

        {/* Task List */}
        <div className="w-3/4 pl-4">
          <div className="flex mb-4">
            <input
              className="border p-2 w-full"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown} // Trigger addTask on Enter
              placeholder="Add a new task inside 'All' category"
            />
          </div>
          <TaskList
            tasks={filteredTasks}
            deleteTask={deleteTask}
            toggleComplete={toggleTask}
          />
        </div>
      </div>
    </div>
  );
}
