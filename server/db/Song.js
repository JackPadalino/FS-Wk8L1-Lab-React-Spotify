const Sequelize = require('sequelize');
const db = require("./db");

const Song = db.define('song',{
    name:{
        type:Sequelize.STRING,
        //unique:true,
        allowNull:false
    },
    audioURL:{
        type:Sequelize.STRING,
    },
    genre:{
        type:Sequelize.STRING,
    }
});

module.exports = Song;