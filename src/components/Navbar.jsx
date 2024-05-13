import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div className="flex justify-center max-lg:hidden bg-black py-4">
        <div className="relative">
          
          <motion.ul 
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1, delay: 1.25, ease: 'easeIn' }}
          className="font-[BuiltTitling] text-[2.5rem] flex gap-[100px] mt-8 justify-center place-items-end">
              <li className="relative">
                <img src="/pb-logo-white.png" className="h-[250px]"/>
              </li>
              <li>What we offer</li>
              <li>Pricing</li>
              <li>The Team</li>
              <li>Talk to Us</li>
          </motion.ul>
        </div>
    </div>
  )
}
