"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";

function SocaialLogin(props) {
  const router = useRouter();

  const session = useSession();

  const handleSubmit = async (providerName) => {
    signIn(providerName);
  };

  useEffect(() => {
    if (session?.status == "authenticated") {
      router.push("/");
      toast("Successfully Logged IN");
    }
  }, [session?.status]);

  return (
    <div>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 mb-2">Or Sign Up with</p>
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={() => handleSubmit("google")}
            className="p-2 rounded-full border hover:bg-gray-100"
          >
            <FaGoogle className="text-red-500" />
          </button>

          <button
            type="button"
            onClick={() => handleSubmit("github")}
            className="p-2 rounded-full border hover:bg-gray-100"
          >
            <FaGithub className="text-blue-700" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SocaialLogin;
