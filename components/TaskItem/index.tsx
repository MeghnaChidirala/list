interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  interface TaskItemProps {
    task: Task;
    toggleComplete: (id: number) => void;
    deleteTask: (id: number) => void;
  }
  
  const TaskItem = ({ task, toggleComplete, deleteTask }: TaskItemProps) => {
    return (
      <li className="flex items-center justify-between border-b py-2">
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
        <button
          onClick={() => deleteTask(task.id)}
          className="text-gray-500 hover:text-blue-500 transition duration-300"
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
              d="M19.5 6L16.5 19.5C16.33 20.19 15.73 20.75 15 20.75H9C8.27 20.75 7.67 20.19 7.5 19.5L4.5 6M6.75 6L5.25 3.75C5.1 3.5 5.3 3.25 5.5 3.25H18.5C18.7 3.25 18.9 3.5 18.75 3.75L17.25 6M9 9V15M15 9V15"
            />
          </svg>
        </button>
      </li>
    );
  };
  
  export default TaskItem;