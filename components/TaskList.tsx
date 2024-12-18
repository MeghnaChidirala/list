interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  interface TaskListProps {
    tasks: Task[];
    deleteTask: (id: number) => void;
    toggleComplete: (id: number) => void;
  }
  
  const TaskList = ({ tasks, deleteTask, toggleComplete }: TaskListProps) => {
    return (
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between border-b py-2"
          >
            {/* Checkbox and Task Text */}
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                className="mr-2"
              />
              <span
                className={`${
                  task.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {task.text}
              </span>
            </label>
  
            {/* Delete Icon */}
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-blue-500 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6L7 20C7 20.55 7.45 21 8 21H16C16.55 21 17 20.55 17 20L18 6M4 6H20M10 6V4H14V6M9 10V17M15 10V17" 
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TaskList;
  