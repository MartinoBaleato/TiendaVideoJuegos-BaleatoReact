import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBYt3-x5J4KCMaRtUCKaUTZyHICEAEIb9Y",
    authDomain: "tiendavideojuegos-baleato.firebaseapp.com",
    projectId: "tiendavideojuegos-baleato",
    storageBucket: "tiendavideojuegos-baleato.appspot.com",
    messagingSenderId: "769080242576",
    appId: "1:769080242576:web:3cc86246d7489c5d988315"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)