import React from "react";

function TransportManagerNavbar() {
  return (
    <div className="flex items-center bg-[#0E495A] text-white font-semibold p-3 justify-between">
      <div className="flex items-center space-x-5">
        <button>Dashboard</button>
        <button>Vehicles</button>
        <button>Drivers</button>
        <button>Routes</button>
        <button>Student Assignment</button>
        <button>Maintenance & Fuel Logs</button>
      </div>
      <button>Logout</button>
    </div>
  );
}

export default TransportManagerNavbar;