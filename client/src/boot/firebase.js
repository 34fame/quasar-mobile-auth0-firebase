import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/performance'
import 'firebase/firestore'
import 'firebase/auth'

const FIREBASE_CONFIG = {
   apiKey: process.env.FIREBASE_APIKEY,
   authDomain: process.env.FIREBASE_AUTHDOMAIN,
   databaseURL: process.env.FIREBASE_DATABASEURL,
   projectId: process.env.FIREBASE_PROJECTID,
   storageBucket: process.env.FIREBASE_STORAGEBUCKET,
   messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
   appId: process.env.FIREBASE_APPID,
   measurementId: process.env.FIREBASE_MEASUREMENTID,
}

const instance = firebase.initializeApp(FIREBASE_CONFIG)
const storage = firebase.storage()
const firestore = firebase.firestore()
const fireauth = firebase.auth()
firebase.analytics()
firebase.performance()

Vue.prototype.$firebase = instance

export { instance, fireauth, firestore, storage }
