import React from "react";

function ParentNavbar() {
  return (
    <div className="flex items-center bg-[#0E495A] text-white font-semibold p-3 justify-between">
      <div className="flex items-center space-x-5">
        <button>Dashboard</button>
        <button>My Child</button>
        <button>Attenance</button>
        <button>Exams & Results</button>
        <button>Homeworks & Assignments</button>
        <button>Fees & Payments</button>
        <button>Transport</button>
        <button>Setting / Account</button>
      </div>
      <button>Logout</button>
    </div>
  );
}

export default ParentNavbar;
