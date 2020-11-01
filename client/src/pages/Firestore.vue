<template>
   <q-page padding>
      <q-list>
         <q-item v-for="user in users" :key="user.id">
            <q-item-label>{{ user.name }}</q-item-label>
         </q-item>
      </q-list>
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
