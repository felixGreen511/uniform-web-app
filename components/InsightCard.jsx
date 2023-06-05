'use client';
import { motion } from "framer-motion";
import { fadeIn, newImages2, newVarriant5 } from "../utils/motion";


const InsightCard = ({title, imgUrl, subtitle, index}) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <motion.img
    //variants={newImages2}
      initial={{ x: -100, y: 0, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: -5, type: "tween" }}
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <motion.div
      variants={newVarriant5}
      initial="hidden"
      animate="show"
       className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
          <h4 className="font-normal lg:text-[42px] text-[26px] text-white">{title}</h4>
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">{subtitle}</p>
      </motion.div>
      <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
          <img src="arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain"/>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
