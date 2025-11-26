'use client';
import React from 'react';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { navigate } from 'next/dist/client/components/segment-cache-impl/navigation';
import { useRouter } from 'next/navigation';


function Nav() {

  const router = useRouter()
 
  return (
    // Navbar Container Animation
    <motion.div
      className="fixed top-0 bg-black h-[60px] w-full flex items-center justify-between font-bold px-2 shadow-lg z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Logo / Title */}
      <motion.div
        className="text-[#98FB98] text-2xl flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* <Image src={logo} width={100} height={150} alt='logo'/> */}
        SmartLife 
      </motion.div>

      {/* Login Button Animation */}
      <motion.div
        className="bg-[#00A86B] px-4 py-2 rounded-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <button className="text-white" onClick={()=>router.push("/login")}>Login</button>
      </motion.div>
    </motion.div>
  );
}

export default Nav;
