
import Button from './Button';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

function ProductCard(props) {
  return (
    <div className=" lg:w-1/4 bg-white p-3 rounded-lg">
      <img className="rounded-xl mx-auto size-80 object-cover" src={props.img} alt="img" />
      <div className=" flex flex-col items-center mt-5 gap-3">
        <h2 className=" font-semibold text-xl">{props.title}</h2>
        <div className=" flex">
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarFill className=" text-brightColor" />
          <BsStarHalf className=" text-brightColor" />
        </div>
        <h3 className=" font-semibold text-lg">$15.99</h3>
        <Button title="Agregar a la carta" />
      </div>
    </div>
  );
}

export default ProductCard