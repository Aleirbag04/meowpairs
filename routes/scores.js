const router = require("express").Router({mergeParams:true});
const {validatorMiddleware} = require('../middleware/validators.js')

const {getScores,postScore, getScoreByCountry} = require("../controllers/scoreControllers.js");

router.get('/', getScores)

router.get('/:country',validatorMiddleware, getScoreByCountry)

router.post('/', postScore)

module.exports = router;

