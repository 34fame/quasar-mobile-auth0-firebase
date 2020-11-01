const jwt = require('express-jwt')
const jwks = require('jwks-rsa')
const firebaseAdmin = require('firebase-admin')

const config = require('./config')

module.exports = function (app) {
   const jwtCheck = jwt({
      secret: jwks.expressJwtSecret({
         cache: true,
         rateLimit: true,
         jwksRequestsPerMinute: 5,
         jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`,
      }),
      audience: config.AUTH0_API_AUDIENCE,
      issuer: `https://${config.AUTH0_DOMAIN}/`,
      algorithms: ['RS256'],
   })

   const serviceAccount = require(config.FIREBASE_KEY)
   firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(serviceAccount),
      databaseURL: config.FIREBASE_DB,
   })

   app.get('/auth/token', jwtCheck, (req, res) => {
      const uid = req.user.sub
      firebaseAdmin
         .auth()
         .createCustomToken(uid)
         .then((customToken) => res.json({ firebaseToken: customToken }))
         .catch((err) =>
            res.status(500).send({
               message: 'Something went wrong acquiring a Firebase token.',
               error: err,
            })
         )
   })
}
