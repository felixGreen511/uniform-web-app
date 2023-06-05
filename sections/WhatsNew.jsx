'use client';


import { motion } from "framer-motion";
import styles from '../styles';
import { NewFeatures, TitleText, TypingText } from '../components'
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion'; 
import { newFeatures } from '../constants'


const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div 
    variants={staggerContainer} 
    initial="hidden"
    whileInView="show"
    viewport={{ once: 'false', amount: 0.25 }}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div 
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| WHAT'S NEW IN OUR UNIFORMS"/>
        <TitleText title={<>Latest Designs in Stock </>}/>
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feacture) => (
            <NewFeatures 
            key={feacture.title} 
            {...feacture}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
      variants={planetVariants('right')}
      className={`flex-1 ${styles.flexCenter}`}
      >
        <img 
        src="/whats-new.jpeg"
        alt="get-started"
        className="w-[90%] h-[50%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
