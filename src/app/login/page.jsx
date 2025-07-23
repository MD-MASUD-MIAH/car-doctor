import Image from "next/image";

import login from "../../../public/assets/images/login/login.svg";
import LoginFrom from "./components/LoginFrom";
function Login(props) {
  return (
    <div>
      <div className="min-h-screen flex items-start justify-center bg-white px-4">
        <div className=" max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2  rounded-lg overflow-hidden">
          {/* Left Side Image */}
          <div className="hidden md:flex items-center justify-center  p-8">
            <Image
              src={login}
              alt="Sign Up Illustration"
              className="max-w-sm w-full"
            />
          </div>

          {/* Right Side Form */}
  <LoginFrom></LoginFrom>
        
        </div>
      </div>
    </div>
  );
}

export default Login;
