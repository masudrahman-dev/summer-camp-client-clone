import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../contexts/firebase/firebase.config";
import axios from "axios";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name, photo) => {
    setLoading(true);
    setName(name);
    setPhoto(photo);
  };

  updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  })
    .then(() => {
      // Profile updated!
      // ...
    })
    .catch((error) => {
      // An error occurred
      // ...
    });
  const googleProvider = new GoogleAuthProvider();
  const GoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("auth.currentUser :>> ", auth.currentUser);
      // console.log("logged in user inside auth state observer", currentUser);
      setUser(currentUser);
     

      // get and set token
      // if (currentUser) {
      //   axios
      //     .post(`${import.meta.env.VITE_BASE_URL}/jwt`, {
      //       email: currentUser?.email,
      //     })
      //     .then((data) => {
      //       console.log(data.data.token);
      //       localStorage.setItem("access-token", data?.data?.token);
      //       setLoading(false);
      //     });
      // } else {
      //   localStorage.removeItem("access-token");
      // }

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    updateUser,
    GoogleSignIn,
    logIn,
    logOut,
    user,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
