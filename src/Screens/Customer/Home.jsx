import { useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";

import Card from "../../components/Card";
import Liquid from "../../components/Fill";
import Product from "../../components/Product";
import Glass from "./../../components/Glass";

const StyledHome = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Home = () => {
  const [products, updateProducts] = useState([
    {
      name: "Lemon Juice",
      amount: 0,
      max: 8,
      unit: "oz",
    },
    {
      name: "Sugar",
      amount: 0,
      max: 12,
      unit: "tsp",
    },
    {
      name: "Ice Cubes",
      amount: 0,
      max: 12,
      unit: "cubes",
    },
  ]);

  const incrementProduct = (name) => {
    updateProducts(
      products.reduce(
        (acc, product) =>
          product.name === name
            ? [
                ...acc,
                {
                  ...product,
                  amount:
                    product.amount <= product.max
                      ? product.amount + 1
                      : product.max,
                },
              ]
            : [...acc, product],
        []
      )
    );
  };

  const decrementProduct = (name) => {
    updateProducts(
      products.reduce(
        (acc, product) =>
          product.name === name && product.amount > 0
            ? [
                ...acc,
                {
                  ...product,
                  amount: product.amount >= 0 ? product.amount - 1 : 0,
                },
              ]
            : [...acc, product],
        []
      )
    );
  };

  const calcPercent = (amount, max) => 100 - (amount / max) * 100;

  return (
    <StyledHome>
      <Glass>
        <Liquid
          bg="#FFC85C"
          percent={calcPercent(products[0].amount, products[0].max)}
          backFill="#FFC85C"
          frontFill="#FFD974"
        />
        <Liquid
          bg="#FFF"
          opacity="70%"
          percent={calcPercent(products[1].amount, products[1].max)}
        />
      </Glass>
      <Card>
        {products.map((product, idx) => (
          <Product
            key={product.name + idx}
            // name={product.name}
            // amount={product.amount}
            {...product}
            increment={() => incrementProduct(product.name)}
            decrement={() => decrementProduct(product.name)}
          />
        ))}
      </Card>
      <Button w="200px" h="50px" bg="#F96E46">
        Add To Cart
      </Button>
    </StyledHome>
  );
};

export default Home;
