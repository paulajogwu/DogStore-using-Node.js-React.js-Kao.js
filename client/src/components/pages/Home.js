import React from 'react';
import '../../App.css';
import Navbar from '../Navbar';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Dogs from '../Doglist';

function Home() {
  return (
    <>
    <Navbar/>
      <Dogs />
      {/* <Cards /> */}
      <Footer />
    </>
  );
}

export default Home;
