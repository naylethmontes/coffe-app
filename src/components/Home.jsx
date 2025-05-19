
import { useState } from 'react';
import img from '../assets/images/cafe-home.jpg'
import Button from '../layouts/Button'
import Postres from './Postres'

function Home() {

  const [showPostres, setShowPostres] = useState(false);

  const handlePostres = () => {
    setShowPostres(true);
    setTimeout(() => {
      const section = document.getElementById("postres");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };


  return (
    <>
      <div className=" min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-radial from-bg-gradient-to-r bg-background to-[#d69155]">
        <div className=" w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
          <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">Café de origen, preparado con pasión.</h1>
          <p>Un espacio para conectar con los sabores auténticos y la tranquilidad de lo hecho a mano.</p>

          <div className=" flex flex-row gap-6">
            {/*<Button title='Agregar a la carta' />*/}


            <Button title='Mas menu 📜' onClick={handlePostres} />
          </div>

        </div>
        <div className='relative'>
          <img src={img} alt="img" />

          <div className=" absolute bg-white px-8 py-2 top-5 right-0 rounded-full shadow-xl/20">
            <h2 className=" font-semibold">20K</h2>
          </div>
          <div className=" absolute bg-white px-8 py-2 bottom-0 -left-10 rounded-full shadow-xl/20">
            <h2 className=" font-semibold">Capuccino</h2>
          </div>
        </div>
      </div>
      {showPostres && <Postres />}
    </>
  )
}

export default Home

