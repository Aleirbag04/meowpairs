const router = require('express').Router({ mergeParams: true })

const scoresRouter = require('./scores');

// base path
router.use('/scores', scoresRouter);


module.exports = router
