import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../hooks/useCart';
import { useState } from 'react';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MenuCard({ product }) {
  const [selectedTemp, setSelectedTemp] = useState(null)
  const addItem = useCart((state) => state.addItem)


  const handleAddToCart = () => {

    if (!selectedTemp) {
      toast.error('Por favor selecciona una temperatura para tu bebida.')
      return;
    }

    const item = {
      id: product.id,
      title: product.name,
      price: product.price,
      img: product.img,
      temperature: selectedTemp,
      quantity: 1
    }
    addItem(item)
    toast.success('Producto añadido al carrito');
  }

  return (

    <div className="bg-white rounded-xl p-4 w-[260px] shadow-md flex flex-col items-center">
      <img className="rounded-lg h-48 object-cover w-full mb-4"
        src={product.img}
        alt={product.name} />

      <div className="flex flex-row justify-between w-full px-1">
        <h3 className="font-semibold text-xl">{product.name}</h3>
        <h3 className="font-semibold text-xl">${product.price.toLocaleString('es-CO')}</h3>
      </div>

      <div className="flex flex-row justify-between mt-3 w-full px-1">
        <div className="flex gap-2">

          <button
            onClick={() => setSelectedTemp('Caliente')}
            className={` px-3 text-sm border-2 rounded-lg transition-all ${selectedTemp === 'Caliente'
              ? 'border-[#AB6B2E] bg-[#FFDCAB] text-[#AB6B2E]'
              : 'border-amber-400 bg-orange-100 text-gray-900'
              }`}
          >
            Caliente
          </button>
          <button
            onClick={() => setSelectedTemp('Frio')}
            className={`px-3 text-sm border-2 rounded-lg transition-all ${selectedTemp === 'Frio'
              ? 'border-[#AB6B2E] bg-[#FFDCAB] text-[#AB6B2E]'
              : 'border-amber-400 bg-orange-100 text-gray-900'
              }`}
          >
            Frio
          </button>
        </div>
        <span
          onClick={handleAddToCart}
          className="flex items-center bg-[#FFDCAB] px-3 py-2 rounded-full cursor-pointer hover:bg-[#ab6b2e]">
          <FaShoppingCart size={20} />
        </span>
      </div>
    </div>
  );
}

export default MenuCard;
