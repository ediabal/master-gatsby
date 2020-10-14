import calcPizzaPrice from './calcPizzaPrice';

export default function calcOrderTotal(order, pizzas) {
  // loop over each item in the order
  return order.reduce((runningTotal, singleOrder) => {
    const pizza = pizzas.find((p) => p.id === singleOrder.id);
    // calc the total for the pizza
    // add that total to the running total
    return runningTotal + calcPizzaPrice(pizza.price, singleOrder.size);
  }, 0);
}
