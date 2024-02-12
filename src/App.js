import './App.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import Landing from './Landing/Landing';
import StudentPic from './StudentPic/StudentPic';
import Features from './Features/Features';
import Search from './Search/Search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <StudentPic />
      <Features />
      <Search />
    </div>
  );
}

export default App;
