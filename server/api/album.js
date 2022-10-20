const router = require('express').Router();
const {Album, Artist, Song} = require('../db');
// connect your API routes here!

//get api/albums
router.get('/',async (req, res)=>{
    console.log('BANANA');
    //const album = await Album.findAll();
    // res.send(album);
    res.send(await Album.findAll({
        include:[
             {model: Artist}
        //     as:'artist'}
        ]
    }))
});
//GET /api/albums/:albumId

router.get('/:id',async(req,res,next)=>{
    try{
        const album = await Album.findByPk(req.params.id,{
            include:[
                {
                    model:Artist,
                },
                {
                    model:Song,
                }
            ]
        });
        res.send(album)
    }catch(error){
        next(error)
    };
}); 

module.exports = router;