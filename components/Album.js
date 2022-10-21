import React from 'react';
import SingleAlbum from './SingleAlbum';
const Album = ({albums}) => {
  return (
    <div className='container'>

          {/* <!-- All Albums --> */}
          <div id='albums' className='row wrap'>
            
        
            {
              albums.map((album) => {
                return <SingleAlbum album={album}/>
              })
            }

            
          </div>
        </div>
  );
};

export default Album;
