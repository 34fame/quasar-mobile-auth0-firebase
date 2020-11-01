<template>
   <q-page class="flex flex-center">
      <div class="column items-center q-gutter-xl">
         <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
         <div class="text-h6">{{ profile }}</div>
      </div>
   </q-page>
</template>

<script>
import { SessionStorage as ss } from 'quasar'

export default {
   name: 'PageIndex',

   computed: {
      profile() {
         if (ss.getItem('profile')) {
            return ss.getItem('profile').name
         } else {
            return 'anonymous'
         }
      },
   },
}
</script>
