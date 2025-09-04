import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import checkValidateData from "@/utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useDispatch} from "react-redux";
import { addUser} from "@/utils/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import useAuthListener from "@/utils/customeHook/useAuthListener";

const Login = () => {
  const [signup, setSignup] = useState(false);
  const [errmessage, setErrMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch=useDispatch();

  //  onAuthStateChanged every time call when login logout
 
    // custome hook
   useAuthListener();

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = checkValidateData(email.current.value);

    setErrMessage(message);
    if (message) return;
    // signup logik

    if (signup) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          // ✅ Wait for updateProfile to finish
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:"https://avatars.githubusercontent.com/u/68136960?v=4&size=64"
          })
            .then(() => {
              const updatedUser = auth.currentUser;
             const { uid, email, displayName,photoURL } = updatedUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
              
              alert("Signup successful! Welcome " + updatedUser.displayName);
              navigate("/about");
            })
            .catch((error) => {
              console.error("Profile update error:", error.message);
              navigate("/");
            });
        })
        .catch((error) => {
          if (error.code == "auth/email-already-in-use") {
            alert("This email is already registered. Please login instead.");
          } else {
            console.error("Profile update error:", error.message);
          }
        });
    } else {
      // signin
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Login successfully! Welcome " + user.displayName);
           navigate("/about");
        })
        .catch((error) => {
          console.log(error.code, error.message);
        });
    }
  };

  return (
    <div
      className="w-screen h-screen 
      bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg')] 
      bg-cover bg-center flex justify-center items-center"
    >
      <form
        style={{ padding: "25px" }}
        className="w-full max-w-md p-6 bg-black rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold  text-white mb-8">
          {signup == true ? "Signup" : "Sign In"}
        </h2>

        <div style={{ marginTop: "5px" }} className="flex flex-col gap-3">
          {signup && (
            <Input
              type="text"
              ref={name}
              placeholder="Name"
              className="w-full bg-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          )}
          <Input
            type="email"
            ref={email}
            placeholder="Email"
            className="w-full bg-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          {errmessage && (
            <span className="text-red-900 font-bold">{errmessage}</span>
          )}

          <Input
            type="password"
            ref={password}
            placeholder="Password"
            className="w-full bg-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <Button
            onClick={handleButtonClick}
            className="w-full bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 transition"
          >
            {signup == true ? "Signup" : "Sign In"}
          </Button>
        </div>
        <p style={{ marginTop: "15px" }}>
          {signup ? (
            <>
              <span className="text-gray-400">Already have a account?</span>
              <span
                style={{ color: "white", cursor: "pointer" }}
                onClick={() => setSignup(false)}
              >
                Sign In
              </span>
            </>
          ) : (
            <>
              <span className="text-gray-400"> New to Netflix? </span>
              <span
                onClick={() => setSignup(true)}
                style={{ color: "white", cursor: "pointer" }}
              >
                Sign up now
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
