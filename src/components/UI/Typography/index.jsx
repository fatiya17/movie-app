// src/components/UI/Typography.jsx
import styled from "styled-components";

const Heading = styled.h2`
  font-size: ${({ size }) => size || "2.2rem"};
  font-weight: bold;
  color: ${({ color }) => color || "#4361ee"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "1rem"};
`;

const Paragraph = styled.p`
  font-size: ${({ size }) => size || "1rem"};
  color: ${({ color }) => color || "#333"};
  line-height: 1.6;
  margin-bottom: ${({ marginBottom }) => marginBottom || "1rem"};
`;

const Subtitle = styled.h3`
  font-size: ${({ size }) => size || "1.45rem"};
  color: ${({ color }) => color || "#666"};
  margin-bottom: ${({ marginBottom }) => marginBottom || "0.5rem"};
`;
export { Heading, Paragraph, Subtitle };