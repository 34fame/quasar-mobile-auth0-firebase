<template>
   <q-layout view="lHh Lpr lFf">
      <q-header elevated>
         <q-toolbar>
            <q-toolbar-title>
               Mobile Auth Sandbox
            </q-toolbar-title>

            <q-btn v-if="!loggedIn()" label="Login" @click="() => handleLogin()" />
            <q-btn v-if="loggedIn()" label="Logout" @click="() => handleLogout()" />
         </q-toolbar>
         <q-toolbar inset>
            <q-tabs v-model="tab">
               <q-route-tab name="home" label="Home" to="/" exact />
               <q-route-tab name="firestore" label="Firestore" :to="{ name: 'firestore' }" exact />
               <q-route-tab name="storage" label="Storage" :to="{ name: 'storage' }" exact />
            </q-tabs>
         </q-toolbar>
      </q-header>

      <q-page-container>
         <router-view />
      </q-page-container>
   </q-layout>
</template>

<script>
import { SessionStorage as ss } from 'quasar'

import * as auth from 'src/services/auth0'

export default {
   name: 'MainLayout',

   data() {
      return {
         tab: 'home',
      }
   },

   methods: {
      loggedIn() {
         return !!ss.getItem('loggedIn')
      },

      handleLogin() {
         auth.login()
      },

      handleLogout() {
         auth.logout()
      },
   },
}
</script>
