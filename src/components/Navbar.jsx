import { useEffect, useRef, useState } from 'react'
import { SiCoffeescript } from 'react-icons/si'
import { Link } from 'react-scroll'
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../hooks/useCart'
import ModalCart from './ModalCart'

function Navbar({ user: initialUser, onLoginClick }) {
  const [menu, setMenu] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const totalQuantity = useCart((state) => state.getTotalQuantity())
  const [showLogout, setShowLogout] = useState(false)
  const [user, setUser] = useState(initialUser || null)

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      } else {
        setUser(null)
      }
    }

    checkUser()

    // Escuchar cuando el usuario inicia sesión
    window.addEventListener("userLoggedIn", checkUser)

    return () => {
      window.removeEventListener("userLoggedIn", checkUser)
    }
  }, [])

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }

  const handleChange = () => {
    setMenu(!menu)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    setShowLogout(false)
  }

  return (
    <div className="fixed w-full z-10">
      <div className="bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-5 lg:px-32 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mr-1 gap-2 cursor-pointer">
          <SiCoffeescript size={25} />
          <h1 className=" text-xl font-semibold">Cafe <br /> Montes</h1>
        </div>

        {/* Enlaces navegación */}
        <nav className="hidden lg:flex gap-8 text-md font-medium">
          {['home', 'menu', 'about', 'products', 'review'].map((item, i) => (
            <Link
              key={i}
              to={item}
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-[#ab602efa]"
            >
              {item === 'home' ? 'Inicio' :
                item === 'about' ? 'Sobre nosotros' :
                  item === 'products' ? 'Productos' :
                    item === 'review' ? 'Reseñas' : 'Menu'}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          ))}
        </nav>

        {/* Acceder / Bienvenido */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative cursor-pointer" onClick={toggleCart}>
            <FaShoppingCart
              size={27}
              onClick={() => setIsCartOpen(true)}
              className="text-black"
            />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </div>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowLogout(!showLogout)}
                className="max-w-[150px] px-4 py-2 bg-[#FFDCAB] border-2 border-white rounded-full text-md hover:text-amber-800 transition-all"

              >
                Hola, <span className="font-semibold">{user.name}</span>
              </button>
              {showLogout && (
                <div className="absolute right-0 mt-2 w-35 bg-white border border-amber-900 rounded-full z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-zinc-800 hover:bg-orange-100 rounded-full"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={onLoginClick}
              className="px-6 py-2 bg-[#FFDCAB] border-2 border-white rounded-full hover:text-[#AB6B2E] transition-all"
            >
              Acceder
            </button>
          )}
        </div>

        {/* Menú hamburguesa */}
        <div className="lg:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`lg:hidden fixed top-16 left-0 w-full bg-black opacity-90 text-orange-700 text-2xl font-semibold flex flex-col items-center gap-6 py-8 transition-transform duration-300 ${menu ? 'translate-x-0' : '-translate-x-full'}`}>
        {['home', 'menu', 'about', 'products', 'review'].map((item, i) => (
          <Link
            key={i}
            to={item}
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-gray-300 transition-all cursor-pointer"
            onClick={closeMenu}
          >
            {item === 'home' ? 'Inicio' :
              item === 'about' ? 'Sobre nosotros' :
                item === 'products' ? 'Productos' :
                  item === 'review' ? 'Reseñas' : 'Menu'}
          </Link>
        ))}

        <div className="relative cursor-pointer " onClick={toggleCart}>
          <FaShoppingCart
            size={27}
            className="text-amber-700 hover:text-white"
          />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </div>
        <div>
          {user ? (
            <div className="flex flex-col items-center gap-2">
              <p className='px-6 py-3 bg-[#FFDCAB] border-2 border-white rounded-full hover:text-amber-800'>
                Bienvenido, <span className='font-medium text-gray-900'>{user.name}</span>
              </p>
              <button
                onClick={() => {
                  handleLogout()
                  closeMenu()
                }}
                className="text-sm text-white underline hover:text-orange-300 transition"
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                onLoginClick()
                closeMenu()
              }}
              className='px-6 py-2 bg-[#FFDCAB] border-2 border-white rounded-full hover:text-amber-600 transition-all'
            >
              Acceder
            </button>
          )}
        </div>
      </div>

      {isCartOpen && <ModalCart onClose={toggleCart} />}
    </div>
  )
}

export default Navbar
