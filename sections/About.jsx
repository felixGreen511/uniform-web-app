'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import { TypingText } from '../components'
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.xPaddings} relative z-10`} id="about">
    <div className="gradient-02 z-0"/>
      <motion.div 
      variants={staggerContainer} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: false,  amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| ABOUT UNIFORMS PLACE ENTERPRICE" textStyles="text-center"/>
        <motion.p variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white">At Uniform Place Enterprice</span> we Research, Develop, Design and Produce Uniforms to meet the Intended purpose and Expectations.
          Our Products ranges from causual uniforms, School, tables and chairs coveralls, play-ground Equipments, white board marker and general school supplies.
          At <span className="font-extrabold text-white">Uniform Place Enterprice</span> we use the combinations of fitness and durable Fabrics with an emphasis on confort and affordability.
          
          <span className="font-extrabold text-white"> We are Unique</span>. 
          We boast of Promptness in production and Delivery no matter the Quality and also maintain exellence in customer services. 
          We are maintain customer Satisfaction and reflect a touch of Exellence in all our designs.
          <span className="font-extrabold text-white">We Recommend booking a complimentary Consultation Now..</span>
        </motion.p>
        <motion.img 
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
 
      </motion.div>
  </section>
);

export default About;
