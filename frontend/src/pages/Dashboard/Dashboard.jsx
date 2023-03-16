import React from 'react';
import Main from '../Main/Main';
import Sidebar from '../Slidebar/Slidebar';


function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <Main />
    </div>
  );
}

export default Dashboard;
