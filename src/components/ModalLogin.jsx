
import { useState } from "react";

export default function ModalLogin({ onClose, onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      const userData = { name, email };
      localStorage.setItem("user", JSON.stringify(userData));
      window.dispatchEvent(new Event("userLoggedIn"))
      onLogin(userData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-orange-300 opacity-95 p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Iniciar sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Nombre</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded border border-zinc-300 bg-zinc-100 text-zinc-900"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Correo electrónico</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded border border-zinc-300 bg-zinc-100 text-zinc-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="text-sm text-zinc-700 hover:text-amber-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
