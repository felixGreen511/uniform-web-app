'use client';
import styles from '../styles';
import { socials } from '../constants/index';
import { motion } from "framer-motion";
import { footerVariants } from '../utils/motion';


const Footer = ({ onAdd, showAdd, }) => {

 return(
  <motion.footer
  variants={footerVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient"/>
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">BOOK YOUR UNIFORMS</h4>
        <button type="button" onClick={onAdd} text={showAdd ? 'Close Booking' : ''} className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
          <img 
          src="/headset.svg"
          alt="headset"
          className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">BOOK NOW</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10"/>
        <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">Uniforms Place Enterprice</h4>
            <p className="font-normal text-[14px] text-white opacity-50"> Developed by Felixchukwu2023. All Rights Reserved</p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <img 
                  src={social.url}
                  key={social.name}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
        </div>
      </div>
    </div>
  </motion.footer>
 );
};

export default Footer;
