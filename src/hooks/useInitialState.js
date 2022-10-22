import { useState } from "react";

const initialState = {
  cart: [],
};

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) =>
    setState({
      cart: [...state.cart, payload],
    });

  const removeFromCart = (indexValue) => {
    setState({
      cart: state.cart.filter((_, index) => index != indexValue),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};
