const Sequelize = require('sequelize');
const db = require("./db");

const Artist = db.define('artist',{
    name:{
        type:Sequelize.STRING,
        //unique:true,
        allowNull:false
    },
});

module.exports = Artist;