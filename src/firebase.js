import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuhDZ2-D0jHKg6FnS9wLuoQWncYPfdGo4",
  authDomain: "watches-project.firebaseapp.com",
  projectId: "watches-project",
  storageBucket: "watches-project.appspot.com",
  messagingSenderId: "231789597721",
  appId: "1:231789597721:web:84f5300388326be19f4688",
  measurementId: "G-7KHSLRKZFF",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);
