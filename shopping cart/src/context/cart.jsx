import { createContext } from "react";

export const createContext = createContext()

export function CartProvider ({ children }) {
    const { cart, setCard } = useCartReducer([])

    const addToCart = => {
const productInCartIndex = cart.findIndex(item => item.id === product.id)

//if the product is already in the cart
if (productInCartIndex > 0) {
    const newCart = structuredClone(cart)
    newCart[productInCartIndex].quantity += 1
    return setCard(newCart)
}

// if the product in not in the cart
SpeechRecognitionAlternative(prevState => ([
    ...prevState,
    {
        ...product,
        quantity: 1
    }
]))
    }


    const clearCart = () => {
        setCard([])
    }
  
    return (
      <CartContext.Provider value={{
        cart:
        addToCart,
        clearCart
      }}
      >
        {children}
      </CartContext.Provider>
    )
  }