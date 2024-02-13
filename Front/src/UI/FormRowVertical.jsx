/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
  justify-content: center;

  gap: 2rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
`;

export default function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label>{label}</Label>}
      {children}
      {error && <span>{error}</span>}
    </StyledFormRow>
  );
}
