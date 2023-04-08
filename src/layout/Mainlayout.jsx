import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/navbar/Navbar';

function Mainlayout(props) {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Mainlayout;
