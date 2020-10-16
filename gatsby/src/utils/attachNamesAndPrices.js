import formatMoney from './formatMoney';
import calcPizzaPrice from './calcPizzaPrice';

export default function attachNamesAndPrices(order, pizzas) {
  return order.map((item) => {
    const pizza = pizzas.find((pizza) => pizza.id === item.id);
    return {
      ...item,
      name: pizza.name,
      thumbnail: pizza.image.asset.fluid.src,
      price: formatMoney(calcPizzaPrice(pizza.price, item.size)),
    };
  });
}
