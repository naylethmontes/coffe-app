import { useState } from 'react';
import img from '../assets/images/cafe-home.jpg'
import Dessert from './Desserts';
import { motion } from 'framer-motion'


function Home() {

  const [showDessets, setShowDessets] = useState(false);


  return (
    <>
      <div className="min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-background to-[#d69155]">
        {/* Texto con animación */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0"
        >
          <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
            Café de origen, preparado con pasión.
          </h1>
          <p className="text-center lg:text-start">
            Un espacio para conectar con los sabores auténticos y la tranquilidad de lo hecho a mano.
          </p>

          <div className="flex flex-row gap-6 justify-center lg:justify-start">
          </div>
        </motion.div>

        {/* Imagen con animación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          <img src={img} alt="img" className="rounded-xl shadow-lg" />
          <div className="absolute bg-white px-8 py-2 top-5 right-0 rounded-full border border-amber-900 shadow-md">
            <h2 className="font-semibold">20K</h2>
          </div>
          <div className="absolute bg-white px-8 py-2 bottom-0 -left-10 rounded-full  border border-amber-900 shadow-md">
            <h2 className="font-semibold">Capuccino</h2>
          </div>
        </motion.div>
      </div>

      {showDessets && <Dessert />}
    </>
  );
}

export default Home;