import React from 'react'

function PrincipalNavbar() {
  return (
    <div className="flex items-center bg-[#0E495A] text-white font-semibold p-3 justify-between">
      <div className='flex items-center space-x-5'>
        <button>Dashboard</button>
        <button>Staff</button>
        <button>Students</button>
        <button>Attendance Overview</button>
        <button>Exams & Results</button>
        <button>Class & Timetable</button>
        <button>Fees & Finance</button>
        <button>Transport</button>
        <button>Approvals</button>
        <button>Reports</button>
      </div>
      <button>
        Logout
      </button>
    </div>
  )
}

export default PrincipalNavbar