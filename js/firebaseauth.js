// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPkwHH-7jECFL8i74qHtlF_MbGIbJe3hc",
  authDomain: "ta-na-medida.firebaseapp.com",
  projectId: "ta-na-medida",
  storageBucket: "ta-na-medida.firebasestorage.app",
  messagingSenderId: "552937702805",
  appId: "1:552937702805:web:fca8039d4adb7a4c45629c",
  measurementId: "G-TPLP09W4BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);