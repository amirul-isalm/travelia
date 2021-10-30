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
  const [isLoading,setIsLoading]=useState(true)

  const provider = new GoogleAuthProvider();

  const auth = getAuth();
  const googleSignIn = () => {
    setIsLoading(true)
   return signInWithPopup(auth, provider)
      
  };

  const logOut = () => {
  
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setIsLoading(false);
    });
  }, []);

  return { user, setUser, error, setError, googleSignIn,logOut,isLoading,setIsLoading };
};

export default useFirebase;
