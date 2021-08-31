import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCzD5bLu0mYC5dWgAku-BHet090oiHJZ5k',
  authDomain: 'innovance-app.firebaseapp.com',
  projectId: 'innovance-app',
  storageBucket: 'innovance-app.appspot.com',
  messagingSenderId: '803177769218',
  appId: '1:803177769218:web:3d784d873a06851d7ffa1b',
  measurementId: 'G-4QWWEC2LKE',
});

const database = firebaseApp.firestore();

const docRef = firebaseApp.firestore().collection('application');

const getAppData = (id) => {
  return docRef
    .doc(id)
    .get()
    .then((doc) => {
      if (doc.exists) return doc.data();

      return null;
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};

const registerApplication = (formData) => {
  const file = formData.file.length ? formData.file[0].name : '';
  return docRef
    .add({
      ...formData,
      status: 'Yanıt Bekleniyor',
      message: '',
      file,
    })
    .then((registerRef) => {
      return registerRef.id;
    });
};

/** firstName: formData.firstName,
      lastName: formData.lastName,
      age: formData.age,
      tcno: formData.tcno,
      reason: formData.reason,
      file: formData.file ? formData.file[0].name : '',
      details: formData.details,
      address: formData.address,
      status: 'Yanıt Bekliyor',
      message: '', */

const AdminResponse = (formData, id) => {
  docRef.doc(id).update({
    status: formData.status,
    message: formData.response,
  });
};

export { database, docRef, getAppData, registerApplication, AdminResponse };
