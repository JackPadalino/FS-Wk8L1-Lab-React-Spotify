import React from 'react';
import Song from './Song';

const SingleAlbum = ({album}) => {
  return (
    <div className='album'>
        <a>
            <img src='default-album.jpg' />
            <p>Name: {album.name}</p>
            <small>Artist Name: {album.artist.name}</small>
        </a>
        <table id='songs'>
              <tbody>
                <Song/>
                <Song/>
                <Song/>

              </tbody>
        </table>
    </div>
  );
};

export default SingleAlbum;
