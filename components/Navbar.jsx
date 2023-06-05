'use client';
import { motion } from "framer-motion";
import styles from '../styles';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { navVariants } from '../utils/motion';

const links = [
  {href: "/about", text: "About Us"},
  {href: "/#explore", text: "Explore Our uniforms"},
  {href: "/#book", text: "Book Today!"},
  {href: "/#contact", text: "Enquries!"},
]


export const Navbar = () => {
  const path = usePathname();
  return(
  <motion.nav 
    variants={navVariants} 
    initial="hidden" 
    whileInView="show" 
    className={`${styles.xPaddings} py-8 relative sm:text-[40px]`} >
      <div className="absolute w-[50%] inset-0 gradient-01"/>
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
          <img src="/new-stamp.jpg" alt="Search" className="w-[30px] h-[30px] object-contain"/>
          <h2 className="font-extrabold text-[20px] leading-[30px] text-white">Uniforms Place Enterprice</h2>
          <ul className="flex justify-center py-5 rounded-sm">
              {links.map((link) => (
              <li className="pr-[2.5rem] cursor-pointer font-bold text-white" key={link.href}>
                <motion.div
                  whileHover={{ scale: 1.1 }}>
                  <Link href={link.href} className={`${link.href === path ? 'text-white font-bold cursor-pointer' : ""} text-base`}>{link.text}</Link>
                </motion.div>
              </li>
              ))}
            </ul>
          <img src="/menu.svg"  alt="" className="w-[24px] h-[24px] object-contain"/>
      </div>
  </motion.nav>
  )
};

export default Navbar;
