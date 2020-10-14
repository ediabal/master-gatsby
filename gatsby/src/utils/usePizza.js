import { useState } from 'react';

export default function usePizza({ pizzas, inputs }) {
  // 1. create some state to hold our order
  const [order, setOrder] = useState([]);

  // 2. make a function to add things to order
  function addToOrder(orderedPizza) {
    setOrder([...order, orderedPizza]);
  }

  // 3. make a function to remove things from order
  function removeFromOrder(index) {
    setOrder([
      // everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1),
    ]);
  }

  // 4. send this data to a serverless function when they checkout
  // TODO

  return {
    order,
    addToOrder,
    removeFromOrder,
  };
}
