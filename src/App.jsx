import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Product from './components/Product'
import Review from './components/Review'
import Footer from './components/Footer'
import ModalLogin from './components/ModalLogin'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


// Asegúrate que el nombre del archivo sea correcto

function App() {
  const [showModal, setShowModal] = useState(false)
  const [user, setUser] = useState(null)
  const [showCart, setShowCart] = useState(false) // ← necesario para abrir/cerrar el modal del carrito

  // Cargar usuario guardado al iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem('coffeeUser')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  // Guardar usuario cada vez que cambia
  useEffect(() => {
    if (user) {
      localStorage.setItem('coffeeUser', JSON.stringify(user))
    }
  }, [user])

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar
        user={user}
        onLoginClick={() => setShowModal(true)}
        onCartClick={() => setShowCart(true)} // ← para abrir el modal desde Navbar
      />

      {showModal && (
        <ModalLogin
          onClose={() => setShowModal(false)}
          onLogin={(userData) => {
            setUser(userData)
            setShowModal(false)
          }}
        />
      )}

      {showCart && <ModalCart onClose={() => setShowCart(false)} />}

      <main>
        <div id='home'>
          <Home />
        </div>

        <div id='menu'>
          <Menu />
        </div>


        <div id='about'>
          <About />
        </div>

        <div id='products'>
          <Product />
        </div>

        <div id='review'>
          <Review />
        </div>
      </main>

      <Footer />

    </div>
  )
}

export default App
