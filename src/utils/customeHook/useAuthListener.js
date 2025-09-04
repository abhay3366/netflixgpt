import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { addUser, removeUser } from '../userSlice';
import { useDispatch } from 'react-redux';
import { auth } from '@/firebaseConfig';

const useAuthListener = () => {
    const dispatch=useDispatch()
         useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

}

export default useAuthListener
