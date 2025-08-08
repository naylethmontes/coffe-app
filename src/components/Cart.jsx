// src/components/Cart.jsx
import { useCart } from '../context/CartContext';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Carrito</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-2 flex justify-between items-center">
              <span>{item.title} - {item.value}</span>
              <button onClick={() => removeFromCart(item.id)} className="text-red-600">Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button onClick={clearCart} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
          Vaciar carrito
        </button>
      )}
    </div>
  );
}

export default Cart;
