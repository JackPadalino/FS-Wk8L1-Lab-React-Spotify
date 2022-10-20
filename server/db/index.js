const db = require('./db')
// require each of your models here...
const Album= require('./Album')
const Artist= require('./Artist')
const Song= require('./Song')


// ...and give them some nice associations here!
// song has many artists
//artist has many song 
Artist.hasMany(Song);
Song.belongsTo(Artist);
//album belongs to one artist 
//artist has many album 
Artist.hasMany(Album);
Album.belongsTo(Artist);
//song belong to one album
//album has many song
Album.hasMany(Song);
Song.belongsTo(Album);

module.exports = {
  db,
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
  Song,
  Artist,
  Album
};
