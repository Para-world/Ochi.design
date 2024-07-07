import React from 'react';
import { motion } from 'framer-motion';

function Cards() {
  const cardVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className='w-full h-screen flex items-center px-32 gap-5 bg-zinc-900'>
      <div className='cardcontainer h-[50vh] w-1/2'>
        <motion.div
          className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'
          variants={cardVariants}
          whileHover='hover'
        >
          <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt='' />
          <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>
            &copy;2019-2024
          </button>
        </motion.div>
      </div>
      <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
        <motion.div
          className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'
          variants={cardVariants}
          whileHover='hover'
        >
          <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' alt='' />
          <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>
            RATING 5.0 ON CLUTCH
          </button>
        </motion.div>
        <motion.div
          className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'
          variants={cardVariants}
          whileHover='hover'
        >
          <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' alt='' />
          <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>
            BUSINESS BOOTCAMP
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Cards;
