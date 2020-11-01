import auth0 from 'auth0-js'

const auth0web = new auth0.WebAuth({
   clientID: process.env.AUTH0_CLIENTID,
   domain: process.env.AUTH0_DOMAIN,
   redirectUri: process.env.AUTH0_REDIRECTURI,
   audience: process.env.AUTH0_AUDIENCE,
   //scope: 'offline_access',
   responseType: 'token id_token',
})

export { auth0web }
