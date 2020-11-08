<template>
   <q-form class='q-gutter-md' @submit='onSubmit'>
      <q-input label='Name' v-model='form.name' filled />
      <q-input label='Title' v-model='form.title' filled />
      <q-btn label='Save' type='submit' />
   </q-form>
</template>

<script>
import * as db from 'src/services/firebase/firestore'

export default {
   name: 'Add',

   data() {
      return {
         form: {}
      }
   },

   props: {
      item: {
         type: Objects,
         required: true,
      }
   },

   methods: {
      onLoad() {
         this.form = {
            id: this.item.id,
            name: this.item.name,
            title: this.item.title
         }
      },

      onSubmit() {
         let result = db.fsUpdate('users', form)
         this.$router.push({ name: 'firestore-list' })
      }

   },

   beforeMount() {
      this.onLoad()
   }
}
</script>

<style></style>
