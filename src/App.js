import React from 'react';
import NavBar from './components/NavBar/navBar';
import Banner from './components/Banner/banner';
import RowPost from './components/RowPosts/rowPost';
import {actionMovies,originals,horrorMovies,comedyMovies} from './Constants/urls';
import './App.css';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'  />
    <RowPost url={comedyMovies} title='Comedy Movies' isSmall={true} />
    <RowPost url={actionMovies} title='Action Movies ' isSmall={true} />
    <RowPost url={horrorMovies} title='Horror Movies' isSmall={true} />
    
    </div>
  );
}

export default App;
