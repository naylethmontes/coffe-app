import img1 from '../assets/images/facebook.png'
import img2 from '../assets/images/instagram.png'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#fffaf4] via-[#f2e1c3] to-[#c8a97e] text-[#3e2f1c]">
      <div className="flex flex-col md:flex-row justify-between gap-12 px-6 md:px-20 py-12">
        {/* Marca */}
        <div className="md:w-1/4">
          <h1 className="text-2xl font-bold mb-4">Café Montes</h1>
          <p className="text-sm leading-relaxed">
            Bienvenido a Café Montes, donde el silencio de las montañas y la tradición familiar se combinan para ofrecerte granos de café de la más alta calidad.
          </p>
        </div>

        {/* Enlaces */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Enlaces</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#menu" className="hover:text-[#84563c] transition">Menú</a></li>
            <li><a href="#about" className="hover:text-[#84563c] transition">Sobre nosotros</a></li>
            <li><a href="#products" className="hover:text-[#84563c] transition">Productos</a></li>
            <li><a href="#reviews" className="hover:text-[#84563c] transition">Reseñas</a></li>
          </ul>
        </div>

        {/* Recomendados */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Recomendados</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-[#84563c] transition">Cappuccino</a></li>
            <li><a href="/" className="hover:text-[#84563c] transition">Latte</a></li>
            <li><a href="/" className="hover:text-[#84563c] transition">Americano</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contacto</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:cafemontes@gmail.com" className="hover:text-[#84563c] transition">cafemontes@gmail.com</a></li>
            <li><a href="tel:+573156785454" className="hover:text-[#84563c] transition">+57 315 678 5454</a></li>
          </ul>
          <div className="flex gap-4 mt-5 w-30 h-10">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img
                src={img1}
                alt="Facebook"
                className=" rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img
                src={img2}
                alt="Instagram"
                className=" rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#e0c5a2] mt-6">
        <p className="text-center text-sm py-5">
          &copy; 2025 <span className="font-semibold">Café Montes</span> | Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
