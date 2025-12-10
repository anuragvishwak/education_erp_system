import React from "react";

function AccountantNavbar() {
  return (
    <div className="flex items-center bg-[#0E495A] text-white font-semibold p-3 justify-between">
      <div className="flex items-center space-x-5">
        <button>Dashboard</button>
        <button>Fees Management</button>
        <button>Expenses</button>
        <button>Salary Management</button>
        <button>Reports</button>
      </div>
      <button>Logout</button>
    </div>
  );
}

export default AccountantNavbar;
