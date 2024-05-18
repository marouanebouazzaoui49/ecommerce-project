import React from 'react';
import Navbar from '../../layouts/frontend/Navbar';
import Sliders from './Sliders';
import Featured from './collections/Featured';
import Popular from './collections/Popular';
import Footer from './Footer';

function Home() {
  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      <Navbar />
      <div className="container py-5">
        <div className="text-center mb-4">
          <h1 className="display-4">Welcome to Our Store</h1>
          <p className="lead">Discover the latest trends in eletronique</p>
        </div>
        <Sliders />
        <hr className="my-5" />
        <h2 className="mb-4">Featured Products</h2>
        <Featured />
        <hr className="my-5" />
        <h2 className="mb-4">Popular Products</h2>
        <Popular />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
