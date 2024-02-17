/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  /* border: 1px solid; */
  background-color: #f6f6f6;
  box-shadow: -1px 0px 2px 1px #0000002b;
  border-radius: 5px;
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: none;
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: #b7adad;
      color: gainsboro;
    `}

  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    /* background-color: #b0aeae75; */
    color: #dc2f24;
  }
`;

export default function Filter({ filterName, options }) {
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
