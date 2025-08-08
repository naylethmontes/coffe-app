
import { useState } from 'react';
import img from '../assets/images/about.jpg'
import Button from '../layouts/Button';


function About() {
  const [showMore, setShowMore] = useState(false)

  const toggleReadMore = () => setShowMore(!showMore)

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center lg:px-32 bg-gradient-to-b from-[#fdfcfb] via-[#ceaf91] to-[#aa896c] animate-fade-in"
    >
      <h1 className="font-semibold text-center text-4xl py-10 text-[#5a3b25]">
        Sobre nosotros
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-5 max-w-7xl">
        <div className="w-full lg:w-2/4 flex justify-center">
          <img
            className="rounded-xl shadow-lg w-full h-70 object-cover"
            src={img}
            alt="img"
          />
        </div>
        <div className="w-full lg:w-2/4 p-4 space-y-3 text-[#3c2a1e]">
          <h2 className="font-semibold text-3xl mb-2">
            ¿Qué hace nuestro café especial?
          </h2>
          <p>
            Cada grano cuenta una historia, porque viene de regiones específicas donde la variedad del café, la altitud y el microclima le dan un perfil único.
          </p>
          <p>
            El café Montes apoya directamente a pequeños productores y comunidades rurales, promoviendo un comercio más justo.
          </p>

          {showMore && (
            <div className="space-y-2 transition-all duration-300">
              <p>
                Además, cada taza refleja el compromiso con prácticas sostenibles: cultivamos respetando la biodiversidad y cuidando los recursos naturales.
              </p>
              <p>
                En nuestra tienda, no solo vendemos café: compartimos cultura, tradición y pasión por el sabor auténtico.
              </p>
              <p>
                Desde la siembra hasta la taza, garantizamos calidad, frescura y un impacto positivo.
              </p>
            </div>
          )}

          <div onClick={toggleReadMore}>
            <Button title={showMore ? "Leer menos..." : "Leer más..."} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;