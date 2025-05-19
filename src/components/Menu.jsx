
import MenuCard from '../layouts/MenuCard';
import img1 from '../assets/images/espresso.jpg';
import img2 from '../assets/images/Cappuccino.jpg';
import img3 from '../assets/images/americano.jpg';
import img4 from '../assets/images/latte.jpg';
import img5 from '../assets/images/machiato.jpg';
import img6 from '../assets/images/Doppio.jpg';

function Menu() {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-background">
      <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">
        Nuestro menu
      </h1>

      <div className=" flex flex-wrap pb-8 gap-8 justify-center ">
        <MenuCard img={img1} title="Espresso" />
        <MenuCard img={img2} title="Cappuccino" />
        <MenuCard img={img3} title="Latte" />
        <MenuCard img={img4} title="Americano" />
        <MenuCard img={img5} title="Macchiato" />
        <MenuCard img={img6} title="Doppio" />
      </div>
    </div>
  );
}

export default Menu;
