<template>
   <q-form class="q-gutter-md" @submit="onSubmit">
      <q-input label="Name" v-model="form.name" filled />
      <q-input label="Title" v-model="form.title" filled />
      <q-btn label="Save" type="submit" />
   </q-form>
</template>

<script>
import * as db from 'src/services/firebase/firestore'

export default {
   name: 'Add',

   data() {
      return {
         form: {
            name: '',
            title: '',
         },
      }
   },

   methods: {
      onSubmit() {
         let result = db.fsCreate('users', form)
         this.$router.push({ name: 'firestore-list' })
      },
   },
}
</script>

<style></style>
