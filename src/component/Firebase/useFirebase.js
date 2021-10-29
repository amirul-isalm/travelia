import { useEffect, useState } from "react";
import FireaseInitialize from "./Firebase.init.";
import {
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

FireaseInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const logOut = () => {
  
    signOut(auth)
      .then(() => {
        setUser("")
      })
      .catch((error) => {
        setError(error.message)
      });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
  }, []);

  return { user, setUser, error, setError, googleSignIn,logOut };
};

export default useFirebase;
