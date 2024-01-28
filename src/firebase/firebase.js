import {getStorage} from 'firebase/storage'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChuC1OQS1zBaBgoefeFovPOpyTAXQVLTU",
  authDomain: "sleek-b61d1.firebaseapp.com",
  projectId: "sleek-b61d1",
  storageBucket: "sleek-b61d1.appspot.com",
  messagingSenderId: "27323785265",
  appId: "1:27323785265:web:408e99717815d909dbf510"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);