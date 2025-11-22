
import React from "react";

function Sidebar() {
  return (
    <>
      <nav className={`space-y-6 m-6 p-3`}>
        <a
          href="/dashboard"
          className="text-white hover:text-blue-600 block p-2 rounded hover:bg-white font-bold "
        >
          Profile
        </a>

         <a
          href="/dashboard"
          className="text-white hover:text-blue-600 block p-2 rounded hover:bg-white font-bold "
        >
          Profile
        </a>

         <a
          href="/dashboard"
          className="text-white hover:text-blue-600 block p-2 rounded hover:bg-white font-bold "
        >
          Profile
        </a>
      </nav>
    </>
  );
}

export default Sidebar;
