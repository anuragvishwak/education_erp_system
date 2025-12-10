import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AdminNavbar() {
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <div className="flex items-center bg-[#0E495A] text-white font-semibold p-3 justify-between">
      <div className="flex items-center space-x-5">
        <button
          onClick={() => {
            navigation("/AdminDashboard");
          }}
          className={`${
            location.pathname === "/AdminDashboard" ? "text-[#950349]" : ""
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            navigation("/AdminStudentManagement");
          }}
          className={`${
            location.pathname === "/AdminStudentManagement"
              ? "text-[#950349]"
              : ""
          }`}
        >
          Student Management
        </button>
        <button
          onClick={() => {
            navigation("/AdminStaffManagement");
          }}
          className={`${
            location.pathname === "/AdminStaffManagement"
              ? "text-[#950349]"
              : ""
          }`}
        >
          Staff Management
        </button>
        <button
          onClick={() => {
            navigation("/AdminAttendance");
          }}
          className={`${
            location.pathname === "/AdminAttendance" ? "text-[#950349]" : ""
          }`}
        >
          Attendance
        </button>
        <button
          onClick={() => {
            navigation("/AdminAcademics");
          }}
          className={`${
            location.pathname === "/AdminAcademics" ? "text-[#950349]" : ""
          }`}
        >
          Academics
        </button>
        <button
          onClick={() => {
            navigation("/AdminFessFinance");
          }}
          className={`${
            location.pathname === "/AdminFessFinance" ? "text-[#950349]" : ""
          }`}
        >
          Fee & Finance
        </button>
        <button
          onClick={() => {
            navigation("/AdminTransportManager");
          }}
          className={`${
            location.pathname === "/AdminTransportManager"
              ? "text-[#950349]"
              : ""
          }`}
        >
          Transport Management
        </button>
        <button
          onClick={() => {
            navigation("/AdminLibraryManagement");
          }}
          className={`${
            location.pathname === "/AdminLibraryManagement"
              ? "text-[#950349]"
              : ""
          }`}
        >
          Library Management
        </button>
        <button
          onClick={() => {
            navigation("/AdminInventory");
          }}
          className={`${
            location.pathname === "/AdminInventory" ? "text-[#950349]" : ""
          }`}
        >
          Inventory
        </button>
      </div>
      <button>Logout</button>
    </div>
  );
}

export default AdminNavbar;
