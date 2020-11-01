import Vue from 'vue'
import VueRouter from 'vue-router'
import { Platform } from 'quasar'
import Auth0Cordova from '@auth0/cordova'

import routes from './routes'

Vue.use(VueRouter)

function handlerUrl(url) {
   Auth0Cordova.onRedirectUri(url)
}

const Router = new VueRouter({
   scrollBehavior: () => ({ x: 0, y: 0 }),
   routes,

   // Leave these as they are and change in quasar.conf.js instead!
   // quasar.conf.js -> build -> vueRouterMode
   // quasar.conf.js -> build -> publicPath
   mode: process.env.VUE_ROUTER_MODE,
   base: process.env.VUE_ROUTER_BASE,
})

export default function(/* { store, ssrContext } */) {
   if (Platform.is.cordova || Platform.is.electron) {
      window.handleOpenURL = handlerUrl
   }

   return Router
}

let router = Router
export { router }
