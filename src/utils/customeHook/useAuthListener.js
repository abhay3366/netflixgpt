import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { addUser, removeUser } from "../userSlice";
import { useDispatch } from "react-redux";
import { auth } from "@/firebaseConfig";
import { useNavigate } from "react-router-dom";

const useAuthListener = () => {
  const dispatch = useDispatch();
   const navigate=useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/home")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, []);
};

export default useAuthListener;
