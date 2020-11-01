import { storage } from 'boot/firebase'

const csUpload = () => {}

const csDownload = () => {}

const csList = async () => {
   let storageRef = storage.ref()
   return storageRef
      .listAll()
      .then((res) => {
         return res.items
      })
      .catch((err) => {
         console.error('csList', err)
         return []
      })
}

const csDelete = () => {}

export { csUpload, csDownload, csList, csDelete }
