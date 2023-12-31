import React from 'react';
import Navbar from '../SharedComponents/Navbar';
import Footer from '../SharedComponents/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;