import React, { useEffect,useState } from 'react';
import axios from "axios";
import {AlbumList, Sidebar, Player} from '../components';

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
      <AlbumList albums={albums}/>

    </div>
  );
};

export default App;