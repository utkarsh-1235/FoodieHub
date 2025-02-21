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
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas optio eos ad, repellendus nostrum laudantium sunt, excepturi impedit non quod accusamus atque libero quaerat, veritatis corrupti. Repudiandae obcaecati repellat consectetur ut, voluptatem, debitis soluta odit at fugit perferendis nobis aliquid dicta expedita nam provident maxime saepe porro, dolor eveniet. Sit aperiam rerum laborum maxime, sapiente ipsum debitis voluptas velit molestiae, tempore, reprehenderit natus corporis omnis ducimus consequuntur? Fugiat quasi natus dignissimos incidunt optio quis maxime amet accusantium iste alias, necessitatibus laboriosam, atque molestias, ipsum laudantium tempora. Aspernatur, magnam incidunt! Numquam voluptate tempora qui eligendi provident rerum omnis beatae voluptatibus! Inventore aliquam, rem officia ipsum temporibus alias quo? Saepe consequuntur facere quasi enim reprehenderit praesentium, tempore ratione! Reiciendis labore voluptatibus soluta alias cum vel veniam harum ipsa laborum! Similique eum deleniti delectus asperiores. Laborum, ipsa quasi, tempore minus ipsam soluta sit rerum aspernatur qui ut voluptatibus distinctio culpa non consequuntur nostrum asperiores. Sapiente at, repellendus suscipit alias asperiores earum eos itaque odit unde. Optio, deserunt aspernatur numquam soluta, repudiandae cum tempora odio deleniti asperiores, facilis quidem. Laboriosam cumque labore repellendus, hic possimus ipsam nisi blanditiis modi maiores similique. Dolores repellat, perferendis libero id aspernatur non deleniti consequatur architecto, ipsam hic impedit incidunt dolore obcaecati, nisi excepturi. Nemo ratione voluptate est.
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