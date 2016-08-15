var passport = require('passport');
var SlackStrategy = require('passport-slack').Strategy;

var config = require('../config');

passport.use(new SlackStrategy({
        clientID: config.slack.clientID,
        clientSecret: config.slack.clientSecret,
        callbackURL: config.slack.callbackURL,
        scope: 'incoming-webhook',
        skipUserProfile: true
    },
    function(accessToken, refreshToken, profile, done) {
        //todo: find user with callback params data
        console.log('Get the callback with accessToken:' + accessToken + " refreshToken:" + refreshToken + 'profile' + profile + ' done:' + done);
    }
));

module.exports = passport;