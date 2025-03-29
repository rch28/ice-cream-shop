import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};
export type DeliveryMethod = "delivery" | "pickup";
type State = {
  cart: CartItem[];
  deliveryMethod: DeliveryMethod;
};
type Action = {
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  setDeliveryMethod: (method: DeliveryMethod) => void;
  getCartCount: () => number;
  clearCart: () => void;
};

export const useStore = create(
  persist<State & Action>(
    (set, get) => ({
      count: 0,
      cart: [],
      deliveryMethod: "delivery",
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.cart.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              cart: state.cart.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          return { cart: [...state.cart, { ...item, quantity: 1 }] };
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })),
      setDeliveryMethod: (method) => set({ deliveryMethod: method }),
      getCartCount: () => get().cart.length,
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);
