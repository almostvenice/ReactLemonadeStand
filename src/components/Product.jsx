import styled from "styled-components";
import Button from "./Button";

const StyledProduct = styled.div`
  position: relative;
  left: 20%;
  width: 100%;
  display: flex;
  /* align-items: center; */
  text-align: center;
`;

const Counter = styled.div`
  position: absolute;
  width: 40%;
  display: flex;
  align-items: center;
  right: 22%;
  justify-content: space-around;
`;

const Product = (props) => {
  const buttonWidth = "30px";
  const buttonHeight = "30px";
  return (
    <StyledProduct>
      <h2>{props.name}</h2>
      <Counter>
        <Button
          onClick={props.increment}
          disabled={props.amount >= props.max}
          w={buttonWidth}
          h={buttonHeight}
          bg="lightgreen"
        >
          +
        </Button>
        <h4>
          {props.amount} {props.unit}
        </h4>
        <Button
          onClick={props.decrement}
          disabled={props.amount <= 0}
          w={buttonWidth}
          h={buttonHeight}
          bg="palevioletred"
        >
          -
        </Button>
      </Counter>
    </StyledProduct>
  );
};

export default Product;
