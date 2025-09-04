import { signOut } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useAuthListener from "@/utils/customeHook/useAuthListener";

const Header2 = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user);
 // custome hook
   useAuthListener();
   
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
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white shadow-md">
      {/* Left Side - Logo */}
      <div className="flex items-center gap-4">
        <img
          className="w-32 cursor-pointer"
          src="img/Netflixlogo.png"
          alt="Netflix Logo"
          onClick={() => navigate("/")}
        />
        {/* Optional Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          
          <li className="cursor-pointer hover:text-red-500"><Link to={"/home"}>Home</Link></li>
          <li className="cursor-pointer hover:text-red-500"><Link to={"/tvShow"}>TV Shows</Link></li>
          <li className="cursor-pointer hover:text-red-500"><Link to={"/movies"}>Movies</Link></li>
          <li className="cursor-pointer hover:text-red-500"> <Link to={"/news"}>New & Popular</Link></li>
          <li className="cursor-pointer hover:text-red-500"> <Link to={"/mylist"}>My List</Link></li>
        </ul>
      </div>

      {/* Right Side - User Info */}
      {userInfo && (
        <div className="flex items-center gap-4">
          <img
            className="w-8 h-8 rounded-full border border-gray-500"
            src={userInfo.photoURL || "https://via.placeholder.com/40"}
            alt="User Avatar"
          />
          <button
            className="bg-red-600 cursor-pointer px-3 py-1 rounded-md text-sm font-semibold hover:bg-red-700 transition"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header2;
