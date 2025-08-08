
import ProductCard from '../layouts/ProductCard';
import img1 from '../assets/images/nesss.jpg'
import img2 from '../assets/images/Aero.jpg'
import img3 from '../assets/images/che.jpg'

function Product() {

  return (
    <div
      className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-gradient-to-b from-[#8f7860] via-[#e0d6ca] to-[#caae95] animate-fade-in"

    >
      <h1 className="text-[#3e2f23] font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8 drop-shadow-sm">
        Nuestros Productos
      </h1>

      <div className="flex flex-wrap pb-8 gap-8 justify-center">
        <ProductCard img={img1} title="Nespresso" price={100} />
        <ProductCard img={img2} title="AeroPress" price={50} />
        <ProductCard img={img3} title="Chemex" price={40} />
      </div>
    </div>
  );
}

export default Product