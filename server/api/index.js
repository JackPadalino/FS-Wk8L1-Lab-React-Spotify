const router = require('express').Router()
const albumRouter = require('./album')
// connect your API routes here!
router.use('/albums', albumRouter);

module.exports = router;