import React from 'react';
import Navbar from './SharedComponents/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './SharedComponents/Footer';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;