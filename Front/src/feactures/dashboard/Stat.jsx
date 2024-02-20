/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyleElement = styled.div`
  display: grid;
  grid-template-columns: 2rem 1fr;
  column-gap: 1.6rem;
  grid-template-rows: auto auto;
  row-gap: 0.6rem;
  align-content: space-around;
  justify-items: end;
  align-items: center;
  padding: 10px;
`;

const Title = styled.h5`
  margin: 0px;
  font-size: 1rem;
  font-weight: 600;
`;
const Value = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

const Icon = styled.span`
  align-items: center;
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  grid-row: 1/-1;
  justify-content: center;
  color: white;
`;

export default function Stat({ icon, color, title, ...restProps }) {
  return (
    <StyleElement>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{restProps.value}</Value>
    </StyleElement>
  );
}
