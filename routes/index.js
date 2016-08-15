var express = require('express');
var router = express.Router();
var passportSlack = require('../auth/slack');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Slack Zone' });
});

router.get('/success', function(req, res, next) {
  res.render('index', { title: 'Success' });
});

router.get('/success', function(req, res, next) {
  res.render('index', { title: 'Failed' });
});

router.get('/auth/slack', passportSlack.authorize('slack'));
router.get('/auth/slack/callback', passportSlack.authorize('slack', { failureRedirect: '/login' }), function(req, res) {
  res.redirect('/success');
});


module.exports = router;
