import styled, { css } from "styled-components";

const colors = {
  primary: "#4351ee",
  secondary: "#b5179e",
  green: "#4CAF50",
};

const hoverColors = {
  green: "#45a049",
};

const sizes = {
  sm: css`
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
  `,
  md: css`
    font-size: 1rem;
    padding: 0.7rem 2rem;
  `,
  lg: css`
    font-size: 1.3rem;
    padding: 0.7rem 2rem;
  `,
};

const Button = styled.button`
  background-color: ${({ color }) => colors[color] || colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 8px 0;
  ${({ size }) => sizes[size || "md"]};
  width: ${({ full }) => (full ? "100%" : "auto")};

  &:hover {
    background-color: ${({ color }) => hoverColors[color] || "#3545dc"};
  }
`;

export default Button;
