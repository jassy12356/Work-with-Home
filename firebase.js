import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4zXHG1QuBiozdZDiQlSGhn_g1_2_Jo58",
  authDomain: "work-with-home-3cbc8.firebaseapp.com",
  projectId: "work-with-home-3cbc8",
  storageBucket: "work-with-home-3cbc8.firebasestorage.app",
  messagingSenderId: "579230440177",
  appId: "1:579230440177:web:36f7973a2d234d66966750",
  measurementId: "G-GQZDWRWDGN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
