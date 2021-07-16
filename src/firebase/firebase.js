/* 
    import firebase from 'firebase/app';
    import 'firebase/firestore';
 */
    import firebase from 'firebase/app';
    import 'firebase/firestore';
    
    const firebaseConfig = {
        apiKey: 'AIzaSyAHJv_Si97RNODcImLDra9_041EGDlJ_r8',
        authDomain: 'tienda-gst.firebaseapp.com',
        projectId: 'tienda-gst',
        storageBucket: 'tienda-gst.appspot.com',
        messagingSenderId: '222101768270',
        appId: '1:222101768270:web:e9b8acc25c0346c91b1b1f',
        measurementId: 'G-YDJYQLEY8X'
    };
    const fb = firebase.initializeApp(firebaseConfig)
    export const database = fb.firestore()