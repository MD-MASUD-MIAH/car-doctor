"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocaialLogin from "./SocaialLogin";

function LoginFrom(props) {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    toast("Submitting....");

    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });

      if (response.ok) {
        router.push("/");
        e.target.reset();
        toast.success("Logged In Successfully");
      } else {
        toast.error("Authentication filed");
      }
    } catch (error) {
      toast.error("Authentication filed");
    }
    console.log({ email, password });
  };

  return (
    <div>
      <div className="p-8 ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Your password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Social Login */}
        <SocaialLogin></SocaialLogin>

        {/* Already have an account */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-orange-500 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginFrom;
