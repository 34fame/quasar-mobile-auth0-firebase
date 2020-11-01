<template>
   <div id="q-app">
      <router-view />
   </div>
</template>

<script>
import { SessionStorage as ss } from 'quasar'

export default {
   name: 'App',

   methods: {
      validateSession() {
         console.log('App mounted')
         if (!ss.getItem('tokens')) return false

         if (!ss.getItem('profile')) this.$router.push({ name: 'auth_callback' })
      },
   },

   mounted() {
      this.validateSession()
   },
}
</script>
