import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDGp3gTVbMZC_3N5_z5sI1ApeUdWLA8CWg",
  authDomain: "samepinchright-hrm.firebaseapp.com",
  databaseURL: "https://samepinchright-hrm-default-rtdb.firebaseio.com",
  projectId: "samepinchright-hrm",
  storageBucket: "samepinchright-hrm.firebasestorage.app",
  messagingSenderId: "166557650916",
  appId: "1:166557650916:web:f3b12edcdf87f7dfe6c1f1",
  measurementId: "G-BK90H7ERPT"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
