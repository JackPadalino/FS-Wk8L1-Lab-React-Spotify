import React from 'react';
import SingleAlbum from './SingleAlbum';

const AlbumList = ({albums}) => {
  return (
    <div className='container'>
          <div id='album-list' className='row wrap'>
            {
              albums.map((album) => {
                return <SingleAlbum album={album}/>
              })
            }
          </div>
        </div>
  );
};

export default AlbumList;
