const testRouter = require('express').Router();
const { test } = require('../controllers/test');

testRouter.route('/').get(test);

module.exports = testRouter;
