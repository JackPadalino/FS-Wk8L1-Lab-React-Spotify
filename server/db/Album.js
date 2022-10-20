const Sequelize = require('sequelize');
//const db = new Sequelize('postgres://localhost:3000/juke')
const db = require("./db");

const Album = db.define('album',{
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    artworkUrl:{
        type: Sequelize.STRING,
        defaultValue: 'default-album.jpg'
        // try{
        //     defaultValue: 'default-album.jpg'
        // }catch{
        //     defaultValue: './public/default-album.jpg'
        // }
    }
})

module.exports = Album;