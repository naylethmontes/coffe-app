
import ProductCard from '../layouts/ProductCard';
import img1 from '../assets/images/nesss.jpg'
import img2 from '../assets/images/aero.jpg'
import img3 from '../assets/images/che.jpg'

function Product() {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-background">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        Nuestros Productos
      </h1>

      <div className=" flex flex-wrap pb-8 gap-8 justify-center">
        <ProductCard img={img1} title="Nespresso" />
        <ProductCard img={img2} title="AeroPress" />
        <ProductCard img={img3} title="Chemex" />
      </div>
    </div>
  );
}

export default Product