"use client";

import { useState } from "react";
import Sidebar from "../sidebar";
import TaskList from "../TaskList";
import InputField from "../InputField";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTask = (text: string) => {
    if (text.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text, completed: false }]);
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

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="p-4 min-h-screen bg-red-400 flex justify-center items-center">
      <div className="bg-white w-[800px] h-[500px] p-6 rounded-md shadow-md flex">
        <Sidebar filter={filter} setFilter={setFilter} />
        <div className="w-3/4 pl-4">
          <InputField addTask={addTask} />
          <TaskList
            tasks={filteredTasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
