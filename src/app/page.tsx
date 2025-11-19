'use client'
import React from "react";
import dashboard from "@/assets/dashboard.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

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
          className="font-bold text-4xl text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to SmartLife 
        </motion.h2>

        <motion.p
          className="text-black text-lg max-w-2xl mt-[1em] leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Your AI-powered productivity companion — organize your tasks, track
          your habits, and plan your day smarter with intelligent assistance.
        </motion.p>

        <motion.button
          className="bg-blue-600 px-5 py-2 rounded-lg mt-[1em] text-white font-bold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-5xl w-full px-4 mt-[1em]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            className="bg-white border rounded-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span>1️⃣</span>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Manage Your Tasks
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Add, prioritize, and complete your daily tasks efficiently with
              smart reminders.
            </p>
          </motion.div>

          <motion.div
            className="bg-white border rounded-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span>2️⃣</span>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Track Your Habits
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Stay consistent with personalized habit tracking and daily
              progress charts.
            </p>
          </motion.div>

          <motion.div
            className="bg-white border rounded-lg p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span>3️⃣</span>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Get AI Guidance
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Let SmartLife’s AI assistant optimize your schedule and improve
              your productivity.
            </p>
          </motion.div>
        </motion.div>
        <motion.h2
          className="font-bold text-3xl text-blue-600 mt-[1em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Your Day, Simplified
        </motion.h2>

        <motion.p
          className="text-black text-lg max-w-2xl mt-[1em] leading-relaxed"
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
          <Image
            src={dashboard}
            width={600}
            height={600}
            alt="dashboard"
            className="mt-[1em] rounded-xl shadow-md"
          />
        </motion.div>
        <motion.p
          className="text-black text-lg max-w-2xl mt-[1em] leading-relaxed text-xl font-medium"
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
            className="bg-blue-600 px-10 py-2 rounded-lg mt-[1em] text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue to Login
          </motion.button>

          <motion.button
            className="border border-gray-400 px-10 py-2 rounded-lg mt-[1em] text-black"
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