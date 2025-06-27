import styled from "styled-components";
import { Heading, Paragraph } from "../UI/Typography";

const StyledFooter = styled.footer`
  background-color: #4361ee;
  color: #fff;
  padding: 1rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <Heading color="white">Movie App</Heading>
      <Paragraph color="white">Created by Fatiya</Paragraph>
    </StyledFooter>
  );
}

export default Footer;
