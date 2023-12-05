import React from 'react';
import NavBar from './components/NavBar/navBar';
import Banner from './components/Banner/banner';
import RowPost from './components/RowPosts/rowPost';
import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost/>
    </div>
  );
}

export default App;
