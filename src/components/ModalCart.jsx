
import { useCart } from "../hooks/useCart"
import { toast } from "react-toastify"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ModalCart({ onClose }) {
  const items = useCart((state) => state.items)
  const removeFromCart = useCart((state) => state.removeFromCart)
  const clearCart = useCart((state) => state.clearCart)

  const handleFinishBuy = () => {
    if (items.length === 0) {
      toast.info('Tu carrito ya esta vacio')
      return
    }

    clearCart()
    toast.success('🎉 Tu compra ha sido exitosa')
  }



  return (

    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center px-4">
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

      <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">🛒 Tu Carrito</h2>

        {items.length === 0 ? (
          <p className="text-center text-gray-500">El carrito está vacío.</p>
        ) : (
          <>
            <ul className="space-y-4 max-h-96 overflow-y-auto pr-2">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl border"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.title}</h3>

                    <div className="text-sm font-medium text-amber-600">
                      {item.temperature && (
                        <p> <span className="text-sm text-gray-600">Temperatura:</span> {item.temperature}</p>
                      )}

                    </div>
                    <p className="text-sm text-gray-600">
                      Cantidad: {item.quantity}
                    </p>

                    <p className="font-medium text-gray-800">
                      ${item.price * item.quantity}
                    </p>

                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-xl"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>

            <div className="text-center mt-6">
              <button
                onClick={handleFinishBuy}
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">
                Finalizar compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
