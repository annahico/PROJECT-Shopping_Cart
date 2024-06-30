import { createContext } from "react";

export const createContext = createContext()

export function CartProvider ({ children }) {
    const { cart, setCard } = useCartReducer([])

    const addToCart = => {
setCart([...cart, product])
    }

    const claerCart = () => {
        setCard([])
    }
  
    return (
      <CartContext.Provider value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart
      }}
      >
        {children}
      </CartContext.Provider>
    )
  }