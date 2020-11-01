<template>
   <q-page padding>
      <q-list>
         <q-item v-for="file in files" :key="file">
            <q-item-label>{{ file }}</q-item-label>
         </q-item>
      </q-list>
   </q-page>
</template>

<script>
import * as storage from 'src/services/firebase/storage'

export default {
   name: 'Storage',

   data() {
      return {
         files: [],
      }
   },

   methods: {
      async getFiles() {
         let files = await storage.csList()
         this.files = files.map((f) => f.fullPath)
      },
   },

   mounted() {
      this.getFiles()
   },
}
</script>

<style></style>
