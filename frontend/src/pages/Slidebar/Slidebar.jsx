import React from 'react';

function Sidebar() {
  return (
    <div className="bg-white border-r w-64 flex-shrink-0">
      <div className="flex items-center justify-center h-16 border-b">
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>
      <nav className="flex flex-col p-4">
        <a href="#" className="py-2 text-gray-700 hover:text-blue-500">Overview</a>
        <a href="#" className="py-2 text-gray-700 hover:text-blue-500">Analytics</a>
        <a href="#" className="py-2 text-gray-700 hover:text-blue-500">Settings</a>
        <a href="#" className="py-2 text-gray-700 hover:text-blue-500">Logout</a>
      </nav>
    </div>
  );
}

export default Sidebar;
