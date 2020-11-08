const routes = [
   {
      path: '/',
      component: () => import('layouts/MainLayout.vue'),
      children: [
         {
            path: '',
            component: () => import('pages/Index.vue'),
         },
         {
            path: 'firestore',
            component: () => import('pages/Firestore.vue'),
            children: [
               {
                  name: 'firestore',
                  path: 'list',
                  component: () => 'components/FirestoreList.vue',
               },
               {
                  name: 'firestore-add',
                  path: 'add',
                  component: () => 'components/FirestoreAdd.vue',
               },
               {
                  name: 'firestore-update',
                  path: 'update',
                  component: () => 'components/FirestoreUpdate.vue',
               },
               {
                  path: 'firestore',
                  redirect: { name: 'firestore-list' },
               },
            ],
         },
         {
            name: 'storage',
            path: 'storage',
            component: () => import('pages/Storage.vue'),
         },
         {
            name: 'auth_callback',
            path: 'auth_callback',
            component: () => import('components/Auth.vue'),
         },
         {
            name: 'logout',
            path: 'logout',
            component: () => import('components/Logout.vue'),
         },
      ],
   },

   // Always leave this as last one,
   // but you can also remove it
   {
      path: '*',
      component: () => import('pages/Error404.vue'),
   },
]

export default routes
