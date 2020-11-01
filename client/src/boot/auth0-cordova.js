import Auth0Cordova from '@auth0/cordova'

const auth0cordova = new Auth0Cordova({
   clientId: process.env.AUTH0_NATIVE_CLIENTID,
   domain: process.env.AUTH0_DOMAIN,
   packageIdentifier: process.env.CORDOVA_PACKAGEID,
   responseType: 'token id_token',
})

export { auth0cordova }
