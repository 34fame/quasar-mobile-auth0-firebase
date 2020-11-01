# Mobile Auth0 Firebase Sandbox (quasar-mobile-auth0-firebase)

## Auth0 Setup

### Important Steps

1. Create an Auth0 application for SPA
1. Create an Auth0 application for native
1. Create Quasar project
1. Enable SessionStorage plugin
1. Install @quasar/dotenv app extension
1. Update environment variables
   -  .env
1. Install Auth0 packages
1. Create boot files
   -  src/boot/auth0.js
   -  src/boot/auth0-cordova.js
1. Create auth service
   -  src/services/auth/index.js
1. Create auth callback component
   -  src/components/Auth.vue
1. Create logout component
   -  src/components/Logout.vue
1. Update router index with auth0-corodova handler
   -  src/router/index.js
1. Create login and logout buttons in MainLayout
   -  src/layouts/MainLayout.vue
1. Display profile in Index
   -  src/pages/Index.vue
1. Add callback and logout routes
   -  src/router/routes.js
1. Add session validation in App
   -  src/App.vue
1. Run Quasar in corodova mode
1. Install cordova plugins
1. Update AndroidLaunchMode
   -  src-cordova/config.xml

#### Create an Auth0 application for native

| Setting                | Value                                                                         |
| ---------------------- | ----------------------------------------------------------------------------- |
| Allowed Callback URLs  | {corodova-package-id}://{auth0-domain}/cordova/{corodova-package-id}/callback |
| Allowed Logout URLs    | {corodova-package-id}://{auth0-domain}/cordova/{corodova-package-id}/callback |
| Allowed Web Origins    |                                                                               |
| Allowed Origins (CORS) | file://\*, http://{local-ip-address}:8080                                     |

#### Update Environment Variables

```sh
APP_BASEURL=http://<local-ip-address>:8080

AUTH0_DOMAIN=<auth0-domain>
AUTH0_CLIENTID=<auth0-clientid-for-spa>
AUTH0_NATIVE_CLIENTID=<auth0-clientid-for-native>
AUTH0_REDIRECTURI=http://<local-ip-address>:8080/auth_callback
AUTH0_AUDIENCE=<auth0-audience>

CORDOVA_PACKAGEID=<cordova-package-id>

```

#### Install Auth0 packages

```sh
// Quasar project directory
> yarn add auth0-js @auth0/cordova
```

#### Install Auth0 Cordova plugins

```sh
// src-cordova directory
> cordova plugin add cordova-plugin-safariviewcontroller
> cordova plugin add cordova-plugin-customurlscheme \
	--variable URL_SCHEME={corodova-package-id} \
	--variable ANDROID_SCHEME={corodova-package-id} \
	--variable ANDROID_HOST={auth0-domain} \
	--variable ANDROID_PATHPREFIX=/cordova/{corodova-package-id}/callback
```

#### Update AndroidLaunchMode

```sh
// src-cordova/config.xml
...
<widget ...>
	...
	<preference name="AndroidLaunchMode" value="singleTask" />
</widget>
```

## Firebase Setup

The Auth0 setup is documented in the _quasar-mobile-auth0_ project. This is a continuation of that.

### Important Steps

1. Create a Firebase account (if necessary)
2. Create a Firebase project
3. Clone the `quasar-mobile-auth0` repo
4. Initialize Firebase
5. Install Firebase SDK
6. Create a Firebase boot file
7. Update environment variables
8. Create Firebase services files
