import React from 'react'
import {motion} from 'framer-motion'
import image from '../Images/WhatsApp Image 2024-07-15 at 12.35.16.jpeg'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-200 to-red-800 text-white">
        <section className='flex-grow text-white py-16 px-6 md:px-12'>
            <div className='max-w-4xl mx-auto flex flex-col items-center md:flex-row gap-8'>
            <motion.img
             src={image}
             alt='Profile'
             className='w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-yellow-400 shadow-lg'
             initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}/>

          <div className='text-center md:text-left'>
            <motion.h2
            className='text-3xl font-bold text-black mb-4'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            >
                About Me
            </motion.h2>
            <motion.p
            className='text-black/70 text-lg leading-relaxed'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse repellat fugiat maxime qui id alias excepturi? Sequi culpa itaque commodi ex! Sapiente placeat minus, libero tempore deleniti in iusto maxime hic consequuntur beatae! Provident maxime, ratione totam dolore repellat dolores consequuntur temporibus itaque, enim at repudiandae natus quia sint exercitationem vero officiis accusamus. Corporis quidem corrupti quo, modi provident sequi sapiente. Laborum totam ad non soluta laboriosam quae nulla corrupti impedit quibusdam, maxime vel ea tenetur ducimus magni est, inventore et quaerat. Laudantium ratione placeat qui deserunt non nostrum nihil culpa! Quae doloremque animi expedita? Nihil consequuntur ab earum consectetur autem, repellendus beatae magni quaerat nemo. Hic incidunt nostrum ut minima ab aut nisi ducimus, soluta dicta officia atque fuga necessitatibus veritatis quae error aspernatur quia pariatur doloribus voluptates qui. Facilis atque eveniet quidem. Necessitatibus, illum at blanditiis numquam maxime voluptas earum quisquam ratione animi voluptatibus fuga molestias nostrum molestiae ut. Nihil officiis ipsum tempora alias. Aut enim corrupti at.
            </motion.p>
            <motion.div
            className="flex justify-center md:justify-start mt-6 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-teal-yellow text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 text-2xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 text-2xl"
            >
              <FaTwitter />
            </a>
          </motion.div>
          </div>
          </div>
        </section>
        <footer className="text-center p-4 bg-black text-gray-400">
        © 2025 MyBrand. All Rights Reserved.
      </footer>
    </div>
  )
}

export default About