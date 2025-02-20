import React from 'react'
import { Carousel } from '@material-tailwind/react'
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    "https://img.freepik.com/free-photo/asian-food-restaurant_7939-2017.jpg?ga=GA1.1.452369704.1721024580&semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/tom-yam-goong-thai-food_66899-348.jpg?ga=GA1.1.452369704.1721024580&semt=ais_hybrid",
    "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?ga=GA1.1.452369704.1721024580&semt=ais_hybrid"
]


function Caraousel() {
    const [currentState, setCurrentState] = useState(0);

    const prevSlide = ()=>{
        setCurrentState((prev)=>(prev === 0 ? images.length - 1 : prev - 1)
    )
    
    }

    const nextSlide = ()=>{
        setCurrentState((prev)=>(prev === images.length - 1 ? 0 : prev + 1)
         )
    }
  return (
   <div className='relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg'>
   <AnimatePresence>
    <motion.img
        key = {currentState}
        src = {images[currentState]}
        alt = 'Caraousel'
        className = 'w-full h-64 md:h-80 lg:h-96 object-cover'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        
        />
   </AnimatePresence>
   <button
    onClick={prevSlide}
    className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover: bg-black/70'>
    <ChevronLeft size={24}/>
   </button>
   <button
    onClick={nextSlide}
    className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover: bg-black/70'>
    <ChevronRight size={24}/>
   </button>
   <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2'>
    {images.map((__, index)=>(
        <div
        key = {index}
        className={`h-3 w-3 rounded-full ${index === currentState ? 'bg-yellow-500' : 'bg-gray-300'}`}/>
    ))}
   </div>
   </div>


  )
}

export default Caraousel

