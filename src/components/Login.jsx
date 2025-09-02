import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const Login = () => {
  const [signup, setSignup] = useState(false);
  return (
    <div
      className="w-screen h-screen 
      bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg')] 
      bg-cover bg-center flex justify-center items-center"
    >
      <form style={{padding:"25px"}} className="w-full max-w-md p-6 bg-gradient-to-t from-black to-transparent rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold  text-white mb-8">
          {signup == true ? "Signup" : "Sign In"}
        </h2>
        
        <div style={{marginTop:"5px"}} className="flex flex-col gap-3">
          {signup && (
            <Input
              type="text"
              placeholder="Name"
              className="w-full bg-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            className="w-full bg-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <Input
            type="password"
            placeholder="Password"
            className="w-full bg-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <Button className="w-full bg-red-600 text-white font-semibold py-3 rounded-md hover:bg-red-700 transition">
            {signup == true ? "Signup" : "Sign In"}
          </Button>
        </div>
        <p style={{marginTop:"15px"}}>
          {signup ? (
           <>
             <span className="text-gray-400">Already have a account?</span>
            <span style={{ color: "white", cursor: "pointer" }} onClick={()=>setSignup(false)}> Sign In</span>
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
