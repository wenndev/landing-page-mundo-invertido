// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js"

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA1-FJdO4Jxd8Pkhcr-b5y9r_Yvgyh-XZc",

  authDomain: "semana-mundo-invertido-b10ca.firebaseapp.com",

  projectId: "semana-mundo-invertido-b10ca",

  storageBucket: "semana-mundo-invertido-b10ca.appspot.com",

  messagingSenderId: "37543666838",

  appId: "1:37543666838:web:339e652dab44a689234eb7",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)

export default app