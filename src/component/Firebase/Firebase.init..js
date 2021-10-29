import firebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";

const FireaseInitialize = () => {
  return initializeApp(firebaseConfig);
};
export default FireaseInitialize;
