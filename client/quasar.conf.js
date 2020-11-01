module.exports = function(ctx) {
   return {
      supportTS: false,
      boot: [ctx.mode.cordova ? 'auth0-cordova' : '', 'auth0', 'axios', 'firebase'],
      css: ['app.sass'],
      extras: [
         'roboto-font', // optional, you are not bound to it
         'material-icons', // optional, you are not bound to it
      ],
      build: {
         vueRouterMode: 'history', // available values: 'hash', 'history'
         extendWebpack(cfg) {},
      },

      devServer: {
         https: false,
         host: '192.168.0.97',
         port: 8080,
         open: true, // opens browser window automatically
      },

      framework: {
         iconSet: 'material-icons', // Quasar icon set
         lang: 'en-us', // Quasar language pack
         config: {},

         importStrategy: 'auto',
         plugins: ['SessionStorage'],
      },

      animations: [],

      ssr: {
         pwa: false,
      },

      pwa: {
         workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
         workboxOptions: {}, // only for GenerateSW
         manifest: {
            name: `Mobile Auth Sandbox`,
            short_name: `Mobile Auth Sandbox`,
            description: `Figuring out how to get a mobile app working with external authentication`,
            display: 'standalone',
            orientation: 'portrait',
            background_color: '#ffffff',
            theme_color: '#027be3',
            icons: [
               {
                  src: 'icons/icon-128x128.png',
                  sizes: '128x128',
                  type: 'image/png',
               },
               {
                  src: 'icons/icon-192x192.png',
                  sizes: '192x192',
                  type: 'image/png',
               },
               {
                  src: 'icons/icon-256x256.png',
                  sizes: '256x256',
                  type: 'image/png',
               },
               {
                  src: 'icons/icon-384x384.png',
                  sizes: '384x384',
                  type: 'image/png',
               },
               {
                  src: 'icons/icon-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
               },
            ],
         },
      },

      // Full list of options: https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
      cordova: {
         // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
      },

      // Full list of options: https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
      capacitor: {
         hideSplashscreen: true,
      },

      // Full list of options: https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
      electron: {
         bundler: 'packager', // 'packager' or 'builder'

         packager: {
            // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options
            // OS X / Mac App Store
            // appBundleId: '',
            // appCategoryType: '',
            // osxSign: '',
            // protocol: 'myapp://path',
            // Windows only
            // win32metadata: { ... }
         },

         builder: {
            // https://www.electron.build/configuration/configuration

            appId: 'mobile-auth',
         },

         // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
         nodeIntegration: true,

         extendWebpack(/* cfg */) {
            // do something with Electron main process Webpack cfg
            // chainWebpack also available besides this extendWebpack
         },
      },
   }
}
