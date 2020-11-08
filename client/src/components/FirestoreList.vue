<template>
   <q-list>
      <q-card v-for="user in items" :key="user.id">
         <q-card-section>
            <q-item>
               <q-item-label>{{ user.name }}</q-item-label>
               <q-item-label>{{ user.title }}</q-item-label>
            </q-item>
         </q-card-section>
         <q-btn flat round icon="add_circle" :to="{ name: 'firestore-add' }" />
         <q-btn flat round icon="build_circle" :to="{ name: 'firestore-update' }" />
         <q-btn flat round icon="remove_circle" @click="onDelete" />
         <q-card-actions> </q-card-actions>
      </q-card>
   </q-list>
</template>

<script>
export default {
   name: 'FirestoreList',

   props: {
      items: {
         type: Array,
         required: true,
      },
      onDelete: {
         type: Function,
         required: true,
      },
   },
}
</script>

<style></style>
