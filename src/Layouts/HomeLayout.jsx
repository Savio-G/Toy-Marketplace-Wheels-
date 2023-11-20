import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponents/Footer';

const HomeLayout = () => {
  return (
    <div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;