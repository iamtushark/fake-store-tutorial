import React, { createContext, useContext, useReducer, useEffect } from 'react';
import localforage from 'localforage';
import { CartItemInterface, CartAction, CartProviderProps } from './interfaces';

const initialCart: CartItemInterface = {};

function cartReducer(cart: CartItemInterface, action: CartAction): CartItemInterface {
  switch (action.type) {
    case 'added': {
      const { id, ...itemWithoutId } = action.item;
      return {
        ...cart,
        [id]: itemWithoutId,
      };
    }
    case 'removed': {
      const { id } = action;
      if (!id) return cart;
      const { [id]: removedItem, ...rest } = cart;
      return rest;
    }
    case 'cleared': {
      return {};
    }
    case 'initialized': {
      const { items } = action;
      if (!items) return cart;
      return items;
    }
    default:
      return cart;
  }
}

// TODO: needs to have the indexedDB value by default.
// Initial thoughts : Could use useLayoutEffect but concerned about performance.
const CartContext = createContext<CartItemInterface>(initialCart);
const CartDispatchContext = createContext<React.Dispatch<CartAction>>(()=>{});

export function CartProvider({ children }: CartProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  useEffect(() => {
    async function loadCartFromDB() {
      try {
        const savedCart = await localforage.getItem<CartItemInterface>('cart');
        if (savedCart) {
          dispatch({ type: 'initialized', items: savedCart });
        }
      } catch (error) {
        console.log("Probably the first load, lets see, if this logs more than one time than i guess its an issue")
      }
    }
    loadCartFromDB();
  }, []);

  useEffect(() => {
    localforage.setItem('cart', cart).catch((error: Error) => {
      console.error('Error saving cart to IndexedDB:', error);
    });
  }, [cart]);

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}
