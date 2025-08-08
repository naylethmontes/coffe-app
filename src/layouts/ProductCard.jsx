
import { useCart } from '../hooks/useCart';
import Button from './Button';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

function ProductCard(props) {
  const addItem = useCart((state) => state.addItem)



  const handleAddToProduct = () => {
    const product = {
      id: props.id,
      title: props.title,
      price: Number(props.price),
      img: props.img
    }
    addItem(product)
  }
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-[#e3d9cd] shadow-md rounded-2xl p-4 w-72 hover:shadow-lg transition-all duration-300">
      <img className="w-full h-48 object-cover rounded-xl mb-4"
        src={props.img}
        alt="img" />
      <div className=" flex flex-col items-center mt-5 gap-3">
        <h2 className="text-[#3e2f23] font-semibold text-xl mb-2">{props.title}</h2>
        <div className=" flex">
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarHalf className=" text-brightColor" />
        </div>
        <h3 className="text-[#6e4f3a] text-lg font-medium">${props.price}</h3>
        <Button
          onClick={handleAddToProduct}
          title="Agregar a la carta"
        />
      </div>
    </div>
  );
}

export default ProductCard