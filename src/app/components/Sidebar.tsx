
import React from "react";

function Sidebar() {
  return (
    <>
      <nav className={`space-y-6 m-6 p-3`}>
        <a
          href="/dashboard"
          className="text-[#98FB98] hover:text-white block p-2 rounded hover:bg-[#00A86B] font-bold "
        >
          Dashboard
        </a>

         <a
          href="/dashboard"
          className="text-[#98FB98] hover:text-white block p-2 rounded hover:bg-[#00A86B] font-bold"
        >
          Task
        </a>

         <a
          href="/dashboard"
          className="text-[#98FB98] hover:text-white block p-2 rounded hover:bg-[#00A86B] font-bold"
        >
          Profile
        </a>
      </nav>
    </>
  );
}

export default Sidebar;
