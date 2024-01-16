import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWStu7i8v3fBFAOmEu4URdYZnmEQIOi9E",
  authDomain: "georgian-space.firebaseapp.com",
  projectId: "georgian-space",
  storageBucket: "georgian-space.appspot.com",
  messagingSenderId: "491111401364",
  appId: "1:491111401364:web:8699b2889cfca773137181",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
