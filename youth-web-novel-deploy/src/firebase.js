// Firebase 콘솔의 웹 앱 설정값으로 아래 내용을 교체하세요.
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "web-novel1.firebaseapp.com",
  databaseURL: "https://web-novel1-default-rtdb.firebaseio.com",
  projectId: "web-novel1",
  storageBucket: "web-novel1.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
