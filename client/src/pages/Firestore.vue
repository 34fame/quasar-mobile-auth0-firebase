<template>
   <q-page padding>
      <router-view />
   </q-page>
</template>

<script>
import * as db from 'src/services/firebase/firestore'

export default {
   name: 'Firestore',

   data() {
      return {
         users: [],
      }
   },

   methods: {
      async getUsers() {
         this.users = await db.fsRead('users')
      },
   },

   mounted() {
      this.getUsers()
   },
}
</script>

<style></style>
