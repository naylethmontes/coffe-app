import { useEffect } from 'react';
import MenuCard from '../layouts/MenuCard';
import { v4 as uuidv4 } from 'uuid';
import Dessert from './Desserts';
import espressoImg from '../assets/images/espresso.jpg'
import cappuccinoImg from '../assets/images/cappu.jpg'
import latteImg from '../assets/images/latte.jpg'
import americanoImg from '../assets/images/americano.jpg'
import machiatoImg from '../assets/images/machiato.jpg'
import doppioImg from '../assets/images/doppio.jpg'

const productsCard = [
  {
    id: uuidv4(),
    name: 'Espresso',
    img: espressoImg,
    price: 3.5,
    temperature: 'Caliente'
  },
  {
    id: uuidv4(),
    name: 'Cappuccino',
    img: cappuccinoImg,
    price: 2.5,
    temperature: 'Frio'
  },
  {
    id: uuidv4(),
    name: 'Latte',
    img: latteImg,
    price: 2.5,
    temperature: 'Caliente'
  },
  {
    id: uuidv4(),
    name: 'Americano',
    img: americanoImg,
    price: 1.5,
    temperature: 'Frio'
  },
  {
    id: uuidv4(),
    name: 'Macchiato',
    img: machiatoImg,
    price: 3.5,
    temperature: 'Caliente'
  },
  {
    id: uuidv4(),
    name: 'Doppio',
    img: doppioImg,
    price: 3.5,
    temperature: 'Frio'
  }
];

function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-32 bg-gradient-to-b from-[#f4e9dd] via-[#e9c9a3] to-[#d69155] animate-fade-in">
      <h1 className="font-semibold text-center text-4xl mt-24 mb-10 text-brown-900 drop-shadow-sm">
        Nuestro menú ☕
      </h1>

      <div className="flex flex-wrap gap-8 justify-center pb-20">
        {productsCard.map((product) => (
          <MenuCard key={product.id} product={product} />
        ))}
      </div>
      <Dessert />
    </div>
  );
}

export default Menu;
