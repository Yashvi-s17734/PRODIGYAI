
import React from "react";

function Sidebar() {
  return (
    <>
      <nav className={`space-y-6 m-6 p-3`}>
        <a
          href="/dashboard"
          className="text-blue-600 hover:text-white block p-2 rounded hover:bg-blue-600 font-bold "
        >
          Dashboard
        </a>

         <a
          href="/dashboard"
          className="text-blue-600 hover:text-white block p-2 rounded hover:bg-blue-600 font-bold"
        >
          Task
        </a>

         <a
          href="/dashboard"
          className="text-blue-600 hover:text-white block p-2 rounded hover:bg-blue-600 font-bold"
        >
          Profile
        </a>
      </nav>
    </>
  );
}

export default Sidebar;
