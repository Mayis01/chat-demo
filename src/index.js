import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAKkNSCf37AvR2n3DbZOpi8Jg9Woksjd94",
  authDomain: "chat-demo-dfa24.firebaseapp.com",
  projectId: "chat-demo-dfa24",
  storageBucket: "chat-demo-dfa24.appspot.com",
  messagingSenderId: "11250378071",
  appId: "1:11250378071:web:5956323eefbdf859480a12",
  measurementId: "G-5CK2DHMDF5"
}

export const Context = createContext(null)

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{

      auth,
      firestore
    }}>
      <App />
    </Context.Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

