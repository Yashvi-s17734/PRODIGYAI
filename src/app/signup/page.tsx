"use client";
import Lottie from "lottie-react";
import animationData from "../../dashboard.json";
export default function SignUpPage() {
 return (
     <div className="min-h-screen flex">
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
       <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24">
         <div className="flex flex-col space-y-6">
           <div>
             <div className="flex items-center space-x-2">
               <div className="w-6 h-6 bg-[#00A86B] rotate-45"></div>
             </div>
             <h2 className="text-2xl font-semibold mt-4 text-[#00A86B]">SignUp!</h2>
             <p className="text-[#00A86B] text-sm">Please enter your details</p>
           </div>
           <form className="space-y-5">
             <div>
               <label className="block text-sm font-medium text-[#00A86B]">
                 Username
               </label>
                <input
                 type="name"
                 placeholder="Enter your username"
                 className="mt-1 w-full border border-[#00A86B] rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
               />
               </div>
               <div>
               <label className="block text-sm font-medium text-[#00A86B]">
                 Email Address
               </label>
               <input
                 type="email"
                 placeholder="Enter your email"
                 className="mt-1 w-full border border-[#00A86B] rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
               />
             </div>
             <div>
               <label className="block text-sm font-medium text-[#00A86B]">
                 Password
               </label>
               <input
                 type="password"
                 placeholder="Enter your password"
                 className="mt-1 w-full border border-[#00A86B] rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
               />
             </div>
 
             
 
             <button
               type="submit"
               className="w-full bg-[#00A86B] text-white py-2 rounded-md transition"
             >
               SignUp →
             </button>
 
             <p className="text-xs text-[#00A86B] text-center">
               By creating an account, you agree to our{" "}
               <a href="#" className="text-[#98FB98]">
                 Terms of Service
               </a>{" "}
               and{" "}
               <a href="#" className="text-[#98FB98]">
                 Privacy Policy
               </a>
               .
             </p>
 
             <p className="text-sm text-center text-[#00A86B]">
               Already have account?{" "}
               <a
                 href="/login"
                 className="text-[#98FB98] font-medium hover:underline"
               >
                 Login 
               </a>
             </p>
           </form>
         </div>
       </div>
      
     </div>
   );
}
