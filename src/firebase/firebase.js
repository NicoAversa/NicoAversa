/* 
    import firebase from 'firebase/app';
    import 'firebase/firestore';
 */
    import * as firebase from 'firebase/app';
    import 'firebase/firestore';
    
    const app = firebase.initializeApp({
        apiKey: 'AIzaSyAHJv_Si97RNODcImLDra9_041EGDlJ_r8',
        authDomain: 'tienda-gst.firebaseapp.com',
        projectId: 'tienda-gst',
        storageBucket: 'tienda-gst.appspot.com',
        messagingSenderId: '222101768270',
        appId: '1:222101768270:web:e9b8acc25c0346c91b1b1f',
        measurementId: 'G-YDJYQLEY8X'
    });

    export function getFirebase() {
        return app;
    }
    export function getFirestore() {
        return firebase.firestore(app);
    }