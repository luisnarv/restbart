/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  background-color: #ffffff;
  box-shadow: 5px 5px 6px 0px #2323232e;
  border-radius: 15px;
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: #e9e9e96b;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background-color: #d2d2d2;
      color: gainsboro;
    `}

  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: #96959575;
    color: #dc2f24;
  }
`;

export default function Filter({ filterName, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currenFilter = options.at(0);

  function handleClick() {}
  return (
    <StyledFilter>
      {options.map((e) => (
        <FilterButton
          onClick={handleClick}
          key={e.value}
          active={e.value === currenFilter ? "true" : ""}
          disabled={e.value === currenFilter}
        >
          {" "}
          {e.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}
