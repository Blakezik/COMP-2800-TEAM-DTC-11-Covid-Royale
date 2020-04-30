//Instantiate router object
const router = require('express').Router();
const passport = require('passport');

//auth login
router.get('/google', passport.authenticate('google', {
    scope:['profile'] //Scope is basically this stuff we want from the users google account
}));


//Callback route for google auth to redirect back too

router.get('/google/redirected', passport.authenticate('google', {failureRedirect: '/failed'}), (req, res) => {
    // console.log(req.user);
    console.log(req.query);
    console.log(req.user);
    res.redirect('/protected.html');
    // req.session.currentUser = req.user;
    //res.send(`You have succesfully been logged in via oauth ${req.user.displayName} with id=${req.user.id}`)

});


module.exports = router;