import { Link } from "react-router-dom";
// import Logo from "../assets/images/logo.png";

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
        
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-slate-900 text-white p-12">
          {/* <img
            src={Logo}
            alt="Logo"
            className="w-24 h-24 mb-6"
          /> */}

          <h1 className="text-4xl font-bold leading-tight">
            Hindustan Scouts & Guides Association
          </h1>

          <p className="mt-6 text-gray-300 leading-8">
            Empowering youth through leadership, service,
            discipline and character development. Join our
            movement and become a part of positive change.
          </p>

          <div className="mt-10 space-y-3">
            <p>✓ Leadership Development</p>
            <p>✓ Community Service</p>
            <p>✓ Adventure Activities</p>
            <p>✓ Character Building</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-800">
              Welcome Back
            </h2>

            <p className="text-gray-500 mt-3">
              Sign in to your account
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Remember Me</span>
              </label>

              <Link
                to="/forgot-password"
                className="text-green-600 font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't have an account?
            </p>

            <Link
              to="/join_now"
              className="text-green-600 font-semibold"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}