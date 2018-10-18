const testRouter = require('express').Router();
const { emotionAnalysis } = require('../controllers/watson');

testRouter.route('/').get(emotionAnalysis);

module.exports = testRouter;