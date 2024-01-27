import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2thbv74au9JA5G9zHj4ayArrfBmmkxos",
  authDomain: "e-prescription-cb02a.firebaseapp.com",
  databaseURL: "https://e-prescription-cb02a-default-rtdb.firebaseio.com",
  projectId: "e-prescription-cb02a",
  storageBucket: "e-prescription-cb02a.appspot.com",
  messagingSenderId: "1038225900126",
  appId: "1:1038225900126:web:2735fa3dfdc718e448eacf",
  measurementId: "G-YPFDNCMPPZ"
};

export const app = initializeApp(firebaseConfig);