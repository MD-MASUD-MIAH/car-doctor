"use client";
import { registerUser } from "@/app/actions/auth/resgisterUser";
import SocaialLogin from "@/app/login/components/SocaialLogin";
function ResgisterFrom(props) {
  const handleSumit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    await registerUser({ name, email, password });
  };
  return (
    <div>
      <div className="p-8 ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign Up</h2>

        <form onSubmit={handleSumit} className="space-y-4 ">
          <div>
            <label className="text-sm font-medium text-gray-600">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

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

export default ResgisterFrom;
