
import img from '../assets/images/about.jpg'
import Button from '../layouts/Button';

function About() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-background">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">Sobre nosotros</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-full lg:w-2/4">
          <img className="rounded-lg w-60 h-60" src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl">
            Que hace nuestro cafe especial?
          </h2>
          <p>
            Cada grano cuenta una historia, porque viene de regiones específicas donde la variedad del café, la altitud y el microclima le dan un perfil único.
          </p>
          <p>
            El café del campo apoya directamente a pequeños productores y comunidades rurales, promoviendo un comercio más justo.
          </p>

          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
}

export default About