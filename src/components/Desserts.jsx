import img1 from '../assets/images/cheesecake.jpg'
import img2 from '../assets/images/brownie.jpg'
import img3 from '../assets/images/tiramisú.jpg'
import img4 from '../assets/images/torta.jpg'
import img5 from '../assets/images/copacafe.jpg'
import img6 from '../assets/images/tartalimon.jpg'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../hooks/useCart'


const desserts = [
  {
    id: 1,
    name: "Cheesecake",
    img: img1,
    description: "Suave y cremoso con mermelada de mora.",
    price: "2$",
  },
  {
    id: 2,
    name: "Brownie",
    img: img2,
    description: "Con trozos de chocolate y nueces.",
    price: "2.5$"
  },
  {
    id: 3,
    name: "Tiramisú",
    img: img3,
    description: "Delicioso postre italiano con café.",
    price: "1.5$"
  },
  {
    id: 4,
    name: "Torta de chocolate",
    img: img4,
    description: "Torta humeda de chocolate y arequipe.",
    price: "2.5$"
  },
  {
    id: 5,
    name: "Copa de cafe y nata",
    img: img5,
    description: "Copa de nata con chocolate y cafe.",
    price: "3$"
  },
  {
    id: 6,
    name: "Tarta de limon",
    img: img6,
    description: "Tarta rellena con crema de limon.",
    price: "2$"
  }
];


function Dessert() {
  const addItem = useCart((state) => state.addItem)

  const handleAddToDessert = (dessert) => {
    const numericPrice = parseFloat(dessert.price.replace('$', '')) || 0

    const product = {
      id: `dessert-${dessert.id}`,
      title: dessert.name,
      price: numericPrice,
      img: dessert.img,
      description: dessert.description,
      quantity: 1
    }
    addItem(product)
  }


  return (

    <section id="desserts" className="py-10 ">
      <h2 className="font-semibold text-center text-4xl  mb-9 text-brown-900 drop-shadow-sm">Deliciosos Postres 🍰</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {desserts.map((dessert) => (
          <div
            key={dessert.id}
            className="bg-orange-100 p-4 rounded-lg shadow-md w-60 text-center ">
            <img
              src={dessert.img}
              alt={dessert.name}
              className="w-full h-40 object-cover" />
            <div className=" p-2 mt-5">

              <h3 className="font-semibold text-lg">{dessert.name}</h3>
              <p className="text-sm text-[#ab602efa]">{dessert.description}</p>

              <p className='absolute py-5 font-medium text-lg'>{dessert.price}</p>
            </div>
            <div className=" flex flex-row justify-between mt-3 ">

              <span
                onClick={() => handleAddToDessert(dessert)}
                className=" flex items-center ml-auto  bg-[#FFDCAB] px-3 py-3 rounded-full cursor-pointer hover:bg-[#ab6b2e]">
                <FaShoppingCart size={20} />
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Dessert