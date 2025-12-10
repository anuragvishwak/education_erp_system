import React from 'react'

function LibrarianNavbar() {
  return (
    <div className="flex items-center bg-[#0E495A] text-white font-semibold p-3 justify-between">
      <div className='flex items-center space-x-5'>
        <button>Dashboard</button>
        <button>Books Inventory</button>
        <button>Issue / Return</button>
        <button>Overdue Books</button>
        <button>Reports</button>
      </div>
      <button>Logout</button>
    </div>
  )
}

export default LibrarianNavbar