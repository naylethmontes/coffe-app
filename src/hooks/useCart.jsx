import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCart = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem) =>
        set((state) => {

          const existingItem = state.items.find((item) =>
            item.id === newItem.id &&
            item.title === newItem.title &&
            item.price === newItem.price &&
            item.temperature === newItem.temperature
          )

          if (existingItem) {
            // ✅ Solo si existe actualizamos cantidad
            return {
              items: state.items.map((item) =>
                item.id === newItem.id &&
                  item.title === newItem.title &&
                  item.price === newItem.price &&
                  item.temperature === newItem.temperature
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            }
          }

          return {
            items: [...state.items, { ...newItem, quantity: 1 }],
          }
        }),
      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ items: [] }),

      getTotalQuantity: () => {
        const items = get().items
        return items.reduce((total, item) => total + item.quantity, 0)
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)
