import styled from "styled-components";

const StyledCard = styled.div`
  height: 300px;
  width: 400px;
  background: #16697A;
  border: 3px solid #333;
  border-radius: 50px;
  color: #EBEBD3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};

export default Card;
