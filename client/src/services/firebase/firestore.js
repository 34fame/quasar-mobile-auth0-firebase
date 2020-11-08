import { firestore as db } from 'boot/firebase'

const fsCreate = async (collection, data) => {
   return db
      .collection(collection)
      .add(data)
      .then((result) => {
         return result.id
      })
      .catch((err) => {
         console.error('fsCreate', err)
         return false
      })
}

const fsRead = async (collection) => {
   return db
      .collection(collection)
      .get()
      .then((snapshot) => {
         let docs = []
         snapshot.docs.map((doc) => {
            docs.push({
               id: doc.id,
               ...doc.data(),
            })
         })
         return docs
      })
      .catch((err) => {
         console.error('fsRead', err)
         return []
      })
}

const fsUpdate = async (collection, data) => {
   return db
      .collection(collection)
      .doc(data.id)
      .update(data)
      .then(() => {
         return true
      })
      .catch((err) => {
         console.error('fsUpdate', err)
         return false
      })
}

const fsDelete = async (collection, id) => {
   return db
      .collection(collection)
      .doc(id)
      .then(() => {
         return true
      })
      .catch((err) => {
         console.error('fsDelete', err)
         return false
      })
}

export { fsCreate, fsRead, fsUpdate, fsDelete }
