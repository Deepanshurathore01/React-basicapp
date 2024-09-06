import React from 'react'
import { FaFileContract } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"


const Card = ({data ,reference}) => {
  return (
    
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={.1} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden'>
       <FaFileContract />
       <p className='text-base mt-5 leading-right font-semibold'>{data.desc}</p>
       <div className='footer absolute bottom-0  w-full  left-0'>
        <div className='flex items-center justify-between mb-3 py-2 px-8'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
          {data.close ? <IoIosClose /> :<FiDownload size=".7em"  color='#fff'/> }
         </span>
        </div>
        {
          data.tag.isOpen &&(
          <div className={`tag w-full p-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
          <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
        </div>
          )
        }
        
       </div>
      
    </motion.div>
  )
}

export default Card
