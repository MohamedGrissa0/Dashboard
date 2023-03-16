import React from 'react';


function Main() {
  return (
    <div className="flex-1 p-10">
      <div className="bg-white rounded-lg shadow-lg p-10">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-blue-500 text-white rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Users</h3>
            <p className="text-xl font-bold">124,567</p>
          </div>
          <div className="bg-green-500 text-white rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Revenue</h3>
            <p className="text-xl font-bold">$2,345,678</p>
          </div>
          <div className="bg-red-500 text-white rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Expenses</h3>
            <p className="text-xl font-bold">$1,234,567</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
