import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const userInfo=useSelector((state)=>state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute flex justify-between top-0 left-0 w-screen px-8 py-2  bg-gradient-to-b from-black/70 to-transparent">
      <img className="w-44 py-4" src="img/Netflixlogo.png" />

      <div className="flex">
      {
        userInfo && (
          <>
            <img className="w-6" src={userInfo.photoURL} />
      <button className="cursor-pointer" onClick={handleSignOut}>
        Sign Out
      </button>
          </>
        )
      }
      
      </div>
    </div>
  );
};

export default Header;
