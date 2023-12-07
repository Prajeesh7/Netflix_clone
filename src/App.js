import React from 'react';
import NavBar from './components/NavBar/navBar';
import Banner from './components/Banner/banner';
import RowPost from './components/RowPosts/rowPost';
import {actionMovies,originals} from './Constants/urls';
import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'  />
    <RowPost url={actionMovies} title='Action' isSmall={true} />
    </div>
  );
}

export default App;
