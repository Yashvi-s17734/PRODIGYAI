"use client";
import React from "react";
import dashboard from "@/assets/dashboard.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../dashboard.json";

function page() {
  return (
    <>
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="font-bold text-4xl text-[#98FB98]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to SmartLife
        </motion.h2>

        <motion.p
          className="text-[#00A86B]  text-lg max-w-2xl mt-[1em] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Your AI-powered productivity companion — organize your tasks, track
          your habits, and plan your day smarter with intelligent assistance.
        </motion.p>

        <motion.button
          className="bg-[#00A86B] px-5 py-2 rounded-lg mt-[1em] text-white font-bold border border-[#98FB98]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-5xl w-full px-4 mt-[1em] "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            className=" bg-[#1A1A1A] border border-[#98FB98] rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span className="text-[#00A86B] font-bold text-xl">1️.</span>
            <h3 className="text-lg font-semibold text-[#98FB98]">
              Manage Your Tasks
            </h3>
            <p className="text-[#00A86B] text-sm leading-relaxed">
              Add, prioritize, and complete your daily tasks efficiently with
              smart reminders.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#1A1A1A] border border-[#98FB98] rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span className="text-[#00A86B] font-bold text-xl">2️.</span>
            <h3 className="text-lg font-semibold text-[#98FB98] mb-2">
              Track Your Habits
            </h3>
            <p className="text-[#00A86B] text-sm leading-relaxed">
              Stay consistent with personalized habit tracking and daily
              progress charts.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#1A1A1A] border border-[#98FB98] rounded-lg p-6 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span className="text-[#00A86B] font-bold text-xl">3️.</span>
            <h3 className="text-lg font-semibold text-[#98FB98] mb-2">
              Get AI Guidance
            </h3>
            <p className="text-[#00A86B] text-sm leading-relaxed">
              Let SmartLife’s AI assistant optimize your schedule and improve
              your productivity.
            </p>
          </motion.div>
        </motion.div>
        <motion.h2
          className="font-bold text-3xl text-[#98FB98] mt-[1em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Your Day, Simplified
        </motion.h2>

        <motion.p
          className="text-[#00A86B] text-lg max-w-2xl mt-[1em] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          SmartLife brings everything together - your tasks, habits, and AI
          Suggestions - into one clean, modern dashboard that adapts to your
          goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="text-center px-8">
            <Lottie
              animationData={animationData}
              loop={true}
              width={100}
              height={130}
              className="mx-auto"
            />
          </div>
        </motion.div>
        <motion.p
          className="text-[#98FB98] text-lg max-w-2xl leading-relaxed text-xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Ready to make your life smarter?
        </motion.p>

        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.button
            className="bg-[#00A86B] px-10 py-2 rounded-lg mt-[1em] text-white border border-[#98FB98]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue to Login
          </motion.button>

          <motion.button
            className="border border-[#98FB98] px-10 py-2 rounded-lg mt-[1em] text-white bg-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore as Guest
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}

export default page;
