const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc    Authenticate w/ Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (request, response) => {
    response.redirect('/dashboard')
})

// @desc    Logout user
// @route   GET /auth/logout
router.get('/logout', (request, response, next) => {
    request.logout((error) => {
        if (error) {
            return next(error)
        }
        response.redirect('/')
    });
})

module.exports = router