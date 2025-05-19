import img1 from '../assets/images/cheesecake.jpg'
import img2 from '../assets/images/brownie.jpg'
import img3 from '../assets/images/tiramisú.jpg'
import img4 from '../assets/images/torta.jpg'
import img5 from '../assets/images/copacafe.jpg'
import img6 from '../assets/images/tartalimon.jpg'
import { FaShoppingCart } from 'react-icons/fa'


const postres = [
  {
    id: 1,
    name: "Cheesecake",
    img: img1,
    description: "Suave y cremoso con mermelada de mora.",
  },
  {
    id: 2,
    name: "Brownie",
    img: img2,
    description: "Con trozos de chocolate y nueces.",
  },
  {
    id: 3,
    name: "Tiramisú",
    img: img3,
    description: "Delicioso postre italiano con café.",
  },
  {
    id: 4,
    name: "Torta de chocolate",
    img: img4,
    description: "Torta humeda de chocolate y arequipe.",
  },
  {
    id: 5,
    name: "Copa de cafe y nata",
    img: img5,
    description: "Copa de nata con chocolate y cafe.",
  },
  {
    id: 6,
    name: "Tarta de limon",
    img: img6,
    description: "Tarta rellena con crema de limon.",
  }
];


function Postres() {


  return (

    <section id="postres" className="py-10 bg-white">
      <h2 className="text-2xl font-bold text-center mb-4">Deliciosos postres</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {postres.map((postre) => (
          <div
            key={postre.id}
            className="bg-background p-4 rounded-lg shadow-md w-60 text-center">
            <img src={postre.img} alt={postre.name} className="w-full h-40 object-cover" />
            <div className=" p-2 mt-5">

              <h3 className="font-semibold text-lg">{postre.name}</h3>
              <p className="text-sm text-[#ab602efa]">{postre.description}</p>
            </div>
            <div className=" flex flex-row justify-between mt-3 ">

              <span className=" flex items-center ml-auto  bg-[#FFDCAB] px-3 py-3 rounded-full cursor-pointer hover:bg-[#ab6b2e]">
                <FaShoppingCart size={20} />
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Postres