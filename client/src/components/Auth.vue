<template> </template>

<script>
import { SessionStorage as ss } from 'quasar'

import { instance as axios } from 'boot/axios'
import * as auth from 'src/services/auth0'
import { login } from 'src/services/firebase/auth'

export default {
   name: 'Auth',

   methods: {
      async initSession() {
         console.log('Auth initSession()')
         let tokens
         if (!ss.getItem('tokens')) {
            tokens = await auth.tokens()
            console.log('Auth initSession() tokens', tokens)
            ss.set('tokens', tokens)
         }
         tokens = ss.getItem('tokens')

         if (!ss.getItem('profile')) {
            let profile = await auth.profile(tokens.accessToken)
            console.log('Auth initSession() profile', profile)
            ss.set('profile', profile)
         }

         let customToken = await axios.get('/auth/token', {
            headers: { Authorization: `Bearer ${tokens.accessToken}` },
         })
         tokens.firebaseToken = customToken.data.firebaseToken
         ss.set('tokens', tokens)
         let result = await login(tokens.firebaseToken)
         console.log('fb login', result)

         ss.set('loggedIn', true)
         this.$router.push('/')
      },
   },

   mounted() {
      this.initSession()
   },
}
</script>

<style></style>
