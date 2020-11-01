<template> </template>

<script>
import { SessionStorage as ss } from 'quasar'

import * as auth from 'src/services/auth0'
import * as fb from 'src/services/firebase/auth'

export default {
   name: 'Logout',

   methods: {
      initSession() {
         ss.clear()
         fb.logout()
         this.$router.push('/')
      },
   },

   mounted() {
      this.initSession()
   },
}
</script>

<style></style>
