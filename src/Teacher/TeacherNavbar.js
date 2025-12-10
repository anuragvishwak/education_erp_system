import React from "react";

function TeacherNavbar() {
  return (
    <div className="flex items-center bg-[#0E495A] text-white font-semibold p-3 justify-between">
      <div className="flex items-center space-x-5">
        <button>Dashboard</button>
        <button>My Classes</button>
        <button>Attendance</button>
        <button>Assignment & Homeworks</button>
        <button>Exams & Grades</button>
        <button>Lesson Plan / Materials</button>
        <button>Leave Management</button>
        <button>Reports</button>
      </div>
      <button>Logout</button>
    </div>
  );
}

export default TeacherNavbar;
