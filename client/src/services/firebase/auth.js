import { instance as fb } from 'boot/firebase'

const login = async (token) => {
   console.log('fb token', token)
   return fb
      .auth()
      .signInWithCustomToken(token)
      .then((result) => {
         console.log('fireauth', result)
         return result
      })
      .catch((err) => {
         console.error('firebase login', err)
         return err.message
      })
}

const logout = async () => {
   return fb
      .auth()
      .signOut()
      .then(() => {
         return true
      })
      .catch((err) => {
         console.error('firebase logout', err)
         return err.message
      })
}

export { login, logout }
