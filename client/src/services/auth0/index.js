import { auth0web } from 'boot/auth0'
import { auth0cordova } from 'boot/auth0-cordova'
import { Platform, SessionStorage as ss } from 'quasar'

import { router } from 'src/router'

const packageId = process.env.CORDOVA_PACKAGEID
const domain = process.env.AUTH0_DOMAIN
const clientId = process.env.AUTH0_CLIENTID
const nativeClientId = process.env.AUTH0_NATIVE_CLIENTID

const returnTo = packageId + '://' + domain + '/cordova/' + packageId + '/callback'
const redirectUrl = 'https://' + domain + '/v2/logout?client_id=' + nativeClientId + '&returnTo=' + returnTo

function openUrl(url) {
   if (Platform.is.cordova) {
      console.log('platform: cordova')
      SafariViewController.isAvailable(function(available) {
         if (available) {
            console.log('safari available')
            SafariViewController.show(
               {
                  url: url,
               },
               function(result) {
                  if (result.event === 'loaded') {
                     console.log('loaded')
                     SafariViewController.hide()
                  }
               },
               function(msg) {
                  console.log('KO: ' + JSON.stringify(msg))
               }
            )
         } else {
            console.log('safari not available')
            window.open(url, '_system')
         }
      })
   } else {
      console.log('platform: electron')
      console.log('safari not available')
      window.open(url, '_system')
   }
}

export function login() {
   if (Platform.is.cordova) {
      const options = { scope: 'openid profile', audience: process.env.AUTH0_AUDIENCE }
      auth0cordova.authorize(options, function(err, authResult) {
         if (err) {
            console.error('login()', err)
            return false
         }
         ss.set('tokens', authResult)
         router.push({ name: 'auth_callback' })
      })
   } else {
      auth0web.authorize()
   }
}

export function logout() {
   if (Platform.is.cordova || Platform.is.electron) {
      openUrl(redirectUrl)
      router.push({ name: 'logout' })
   } else {
      auth0web.logout({
         returnTo: process.env.APP_BASEURL + '/logout',
      })
   }
}

export function tokens() {
   return new Promise((response, reject) => {
      auth0web.parseHash({ hash: window.location.hash }, function(err, authResult) {
         if (err) {
            console.error('tokens()', err)
            reject()
         }
         response(authResult)
      })
   })
}

export function profile(access_token) {
   return new Promise((response, reject) => {
      auth0web.client.userInfo(access_token, async (err, profile) => {
         if (err) {
            console.error('profile()', err)
            reject()
         }
         response(profile)
      })
   })
}
