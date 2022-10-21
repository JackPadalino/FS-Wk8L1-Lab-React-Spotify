import React, { useEffect } from 'react';
import Album from '../components/Album';
import Player from '../components/Player';
import Sidebar from '../components/Sidebar';
import {useState} from 'react';
import axios from "axios";

// const {Album, Sidebar, Player} = require('../components');

// import ContactList from './ContactList';
// import SingleContact from './SingleContact';

const dummyData = [
  {
    "id": 1,
    "name": "No Dummy",
    "artworkUrl": "default-album.jpg",
    "artistId": 1,
    "artist": {
      "id": 1,
      "name": "The Crash Test Dummies"
    }
  },
  {
    "id": 2,
    "name": "I React to State",
    "artworkUrl": "default-album.jpg",
    "artistId": 1,
    "artist": {
      "id": 1,
      "name": "The Crash Test Dummies"
    }
  }
];


const App = () => {
  
  const [albums,setAlbums] = useState([]);
  //display state, setDisplayAlbum 
  const grabAlbums = async () =>{
    const response = await axios.get("/api/albums");
    const albumData = await response.data;
    console.log(response);
    setAlbums(albumData);
  };

  useEffect(() =>{
    grabAlbums();
  }, []);

  return (
    <div className='row container'>
      {/* The music starts here! */}

      <Sidebar/>
      <Player/>
      <Album albums={albums}/>

    </div>
  );
};

export default App;