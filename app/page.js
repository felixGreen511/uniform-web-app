'use client';
import { useState } from 'react';
import { Footer, Navbar } from '../components';
import Booking from '../sections/Booking';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import { motion } from 'framer-motion';
import { newVarriant5 } from '../utils/motion';


const Page = ({onClick}) => {
  const [showAddedUser, setShowAddedUser] = useState(false);
  const [user, setUser] = useState([
    {
      "id": 1,
      "name": "Chukwu",
      "uniform": "Excursion Outfits",
      "date": "22nd Nov",
      "color": []
    },
    {
      "id": 2,
      "name": "Evelyn",
      "uniform": "Sports Wear",
      "date": "2nd April",
      "color": []
    },
    {
      "id": 3,
      "name": "Keneth",
      "uniform": "Canteen wear",
      "date": "22nd Nov",
      "color": []
    }
  ]);
  return(
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <Hero />
    <motion.div variants={newVarriant5} className='relative'>
      <About />
      <div className='gradient-03 z-0' />
      <Explore />
    </motion.div>
    <motion.div variants={newVarriant5} className='relative'>
      <GetStarted />
      <div className='gradient-04 z-0' />
      <WhatsNew />
    </motion.div>
    <World />
    <div className='relative'>
      <Insights />
      <div className='gradient-04 z-0' />
      <Feedback />
      <div className='gradient-04 z-0' />
      {showAddedUser && <Booking onAdd={onClick}/>}
    </div>
    <Footer onAdd={() => setShowAddedUser(!showAddedUser)} showAdd={showAddedUser}/>
  </div>
  )
}

export default Page;
