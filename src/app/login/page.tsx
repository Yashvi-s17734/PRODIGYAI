"use client";
import Lottie from "lottie-react";
import animationData from "../../dashboard.json";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="flex flex-col space-y-6">
          <div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-blue-600 rotate-45"></div>
            </div>
            <h2 className="text-2xl font-semibold mt-4">Welcome Back!</h2>
            <p className="text-gray-500 text-sm">Please enter your details</p>
          </div>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-blue-600" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login →
            </button>

            <p className="text-xs text-gray-500 text-center">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-blue-600">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600">
                Privacy Policy
              </a>
              .
            </p>

            <p className="text-sm text-center">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-blue-600 font-medium hover:underline"
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#98FB98] to-[#00A86B] text-white items-center justify-center">
        <div className="text-center px-8 ">
          <Lottie
            animationData={animationData}
            loop={true}
            width={90}
            height={90}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
