// app/components/Sidebar.tsx
interface SidebarProps {
    filter: "all" | "active" | "completed";
    setFilter: (filter: "all" | "active" | "completed") => void;
  }
  
  const Sidebar = ({ filter, setFilter }: SidebarProps) => {
    return (
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
    );
  };
  
  export default Sidebar;
  