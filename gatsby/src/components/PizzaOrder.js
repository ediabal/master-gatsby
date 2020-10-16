import React from 'react';
import Img from 'gatsby-image';
import calcPizzaPrice from '../utils/calcPizzaPrice';
import formatMoney from '../utils/formatMoney';
import MenuItemStyles from '../styles/MenuItemStyles';

export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
  return (
    <>
      {order.map((singleOrder, index) => {
        const pizza = pizzas.find((p) => p.id === singleOrder.id);
        return (
          <MenuItemStyles key={`${singleOrder.id}-${index}`}>
            <Img fluid={pizza.image.asset.fluid} />
            <h2>{pizza.name}</h2>
            <p>
              {formatMoney(calcPizzaPrice(pizza.price, singleOrder.size))}
              <button
                type="button"
                className="remove"
                title={`Remove ${singleOrder.size} ${pizza.name}`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
}
