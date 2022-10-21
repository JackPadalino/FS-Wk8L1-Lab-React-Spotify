import React from 'react';

const SingleAlbum = ({album}) => {
  return (
    <div className='album'>
        <a>
            <img src='default-album.jpg' />
            <p>Name: {album.name}</p>
            <small>Artist Name: {album.artist.name}</small>
        </a>
    </div>
  );
};

export default SingleAlbum;
