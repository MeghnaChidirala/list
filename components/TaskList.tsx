// app/components/TaskList.tsx
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskList = ({ tasks, toggleTask, deleteTask }: TaskListProps) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center p-2 border-b"
        >
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="mr-2"
            />
            <span
              className={`${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.text}
            </span>
          </div>
          <button
            onClick={() => deleteTask(task.id)}
            className="text-gray-500 hover:text-blue-500"
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
