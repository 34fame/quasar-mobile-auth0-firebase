import { firestore as db } from 'boot/firebase'

const fsCreate = () => {}

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

const fsUpdate = () => {}

const fsDelete = () => {}

export { fsCreate, fsRead, fsUpdate, fsDelete }
