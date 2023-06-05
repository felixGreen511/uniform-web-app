'use client';
import { useState } from 'react';
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";



const Booking = ({ onClick }) => {

  const [name, setName] = useState('');
  const [uniform, setUniform] = useState('');
  const [date, setDate] = useState('');
  const [color, setColor] = useState([]);

    const handleSubmit =  (e) => {
        e.preventDefault();
        try {
          if(!name){
            alert('Please the Name of your School')
          }else{
            onClick({name, uniform, date, color});
            setName('');
            setUniform('');
            setDate('');
            setColor([]);
          }
        } catch (err) {
          console.log(err);
        }
    }
    return(
    <section className={`${styles.paddings} relative z-10`} id='book'>
      <motion.div 
        variants={staggerContainer} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: 'false', amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
        >
          <motion.div 
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[34px] border-[1px] border-[#6a6a6a] relative"
          >
            <div className="feedback-gradient"/>
            <div>
              <h4 className="font-boldsm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">Book your Uniforms</h4>
              <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white"> We Deliver our Services in time</p>
            </div>
            <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
              Uniforms place Enterprice is Unique when it comes Fabrics and Designs. 
              We understand our customers when its comes to descriptions of Designs and Delivery Locations. 
              We produce and Deliver Major Uniforms across West Africa and the Globe at Large.  
             Please, kindly fill in the correct responding information to enable us serve you Better.
            </p>
          </motion.div>
          <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
          >
          <div className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover">
                <form class="shadow-md px-8 pt-6 pb-8 mb-4 rounded-[40px] bg-[#0e0f21]" onSubmit={handleSubmit}>
                  <div class="mb-4">
                    <label class="block text-gray-100 text-sm font-bold mb-2" for="firstname">
                      First Name
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="color" type="text" placeholder="First Name"/>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-100 text-sm font-bold mb-2" for="email">
                      Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your Company Email"/>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-100 text-sm font-bold mb-2" for="username">
                      What'sApp Number
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="number" type="number" placeholder="Enter your Phone Number"/>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-100 text-sm font-bold mb-2" for="location">
                      Location eg Nearest Bustop
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Enter your Address"/>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-100 text-sm font-bold mb-2" for="city">
                      City
                    </label>
                    <input class="shadow appearance-none border border-blue-900 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="City eg NewYork"/>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-100 text-sm font-bold mb-2" for="username">
                      Country
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" id="country" type="countries" placeholder="Choose your Country"/>
                  </div>
                  <div class="mb-4">
                    <label class="block text-gray-100 text-sm font-bold mb-2" for="username">
                      Describe your Color and Design
                    </label>
                    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="description" rows="10"cols="10" placeholder="What Quantity do you need ?"/>
                  </div>
                  <div class="flex items-center justify-between">
                    <button class="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => handleSubmit()}>
                      Send
                    </button>
                  </div>
                </form>
          </div>
            <motion.div
            variants={zoomIn(0.4, 1)}
            className="lg:block hidden absolute -left-[10%] top-[3%]"
            >
              <img 
              src="/new-stamp.jpg"
              alt="stamp"
              className="w-[155px] h-[155px] object-contain"
              />
            </motion.div>
          </motion.div>
      </motion.div>
</section>
  )
}

export default Booking