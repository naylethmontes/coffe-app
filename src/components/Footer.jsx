import img1 from '../assets/images/facebook.png'
import img2 from '../assets/images/instagram.png'

export default function Footer() {


  return (
    <div className=" bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black   md:mt-0 ">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-20 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Cafe Del campo</h1>
          <p className=" text-sm">
            Bienvenido a café del campo que nace lejos del ruido de las grandes ciudades, en las fincas familiares y montañas donde el clima, el suelo y la altitud se combinan para crear granos de una calidad excepcional

          </p>

        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-white transition-all cursor-pointer"
              href="#menu"
            >
              Menu
            </a>
            <a
              className="hover:text-white transition-all cursor-pointer"
              href="#about"
            >
              Sobre nosotros
            </a>
            <a
              className=" hover:text-white transition-all cursor-pointer"
              href="#products"
            >
              Productos
            </a>
            <a
              className=" hover:text-white transition-all cursor-pointer"
              href="#reviews"
            >
              Reseñas
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-white transition-all cursor-pointer"
              href="/"
            >
              Cappuccino
            </a>
            <a
              className=" hover:text-white transition-all cursor-pointer"
              href="/"
            >
              Latte
            </a>
            <a
              className=" hover:text-white transition-all cursor-pointer"
              href="/"
            >
              Americano
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contacto</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-white transition-all cursor-pointer"
              href="/"
            >
              cafedelcampo@gmail.com
            </a>
            <a
              className=" hover:text-white transition-all cursor-pointer"
              href="/"
            >
              +57 315 678 5454
            </a>
            <a
              className=" hover:text-white transition-all cursor-pointer"
              href="/"
            >
              Redes sociales
            </a>
            <div className="flex gap-5 mx-auto w-10 h-10 justify-center ml-6 cursor-pointer">
              <img src={img1} alt="Facebook" />
              <img src={img2} alt="Instagram" />
            </div>
          </nav>
        </div>
      </div>
      <div>
        <div>
          <p className=" text-center py-4">
            &copy; 2025,
            <span className=" text-backgroundColor">
              {" "}
              Cafe del Campo{" "}
            </span>
            | Todos los derechos reservados
          </p>
        </div>
      </div>
    </div>
  );
}
