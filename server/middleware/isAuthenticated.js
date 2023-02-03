//import dependecies required to execute middleware
require('dotenv').config()
const jwt = require('jsonwebtoken')
const {SECRET} = process.env

module.exports = {
    isAuthenticated: (req, res, next) => {
        const headerToken = req.get('Authorization')
        // send GET request to server to retrieve authorization token

        if (!headerToken) {
            console.log('ERROR IN auth middleware')
            res.sendStatus(401)
        }
        //if no headerToken print "ERROR in auth middleware" to console, send 401 status code"

        let token

        try {
            token = jwt.verify(headerToken, SECRET)
            //verify if received token is a match with SECRET key
        } catch (err) {
            err.statusCode = 500
            throw err
        }

        if (!token) {
            const error = new Error('Not authenticated.')
            error.statusCode = 401
            //if token does not match return error code and message
            throw error
        }

        next()
    }
}