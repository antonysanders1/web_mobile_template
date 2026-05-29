import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import "firebase/compat/functions";

const viteEnv = typeof import.meta !== "undefined" ? import.meta.env : {};
const legacyEnv =
  typeof process !== "undefined" && process.env ? process.env : {};

const getEnvValue = (viteKey, legacyKey) =>
  viteEnv[viteKey] || legacyEnv[legacyKey] || "";

const firebaseConfig = {
  apiKey: getEnvValue("VITE_API_KEY", "REACT_APP_API_KEY"),
  authDomain: getEnvValue("VITE_AUTH_DOMAIN", "REACT_APP_AUTH_DOMAIN"),
  projectId: getEnvValue("VITE_PROJECT_ID", "REACT_APP_PROJECT_ID"),
  storageBucket: getEnvValue("VITE_STORAGE_BUCKET", "REACT_APP_STORAGE_BUCKET"),
  messagingSenderId: getEnvValue(
    "VITE_MESSAGING_SENDER_ID",
    "REACT_APP_MESSAGING_SENDER_ID"
  ),
  appId: getEnvValue("VITE_APP_ID", "REACT_APP_APP_ID"),
  measurementId: getEnvValue("VITE_MEASUREMENT_ID", "REACT_APP_MEASUREMENT_ID"),
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export { db, auth, storage, functions };
export default firebase;
