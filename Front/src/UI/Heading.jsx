/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const StyleHeader = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      margin: 0px;
      font-size: 3rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      margin: 0px;
      font-size: 2rem;
      font-weight: 600;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      margin: 0px;
      font-size: 1.8rem;
      font-weight: 500;
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      margin: 0px;
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
    ${(props) =>
    props.as === "h5" &&
    css`
      margin: 0px;
      font-size: 0.9rem;
      font-weight: 600;
      text-align: center;
    `};
`;

export default function Heading({ as, children }) {
  return <StyleHeader as={as}>{children}</StyleHeader>;
}
