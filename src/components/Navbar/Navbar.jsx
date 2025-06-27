import styled from "styled-components";
import { Link } from "react-router-dom";
import { Heading } from "../UI/Typography";

const StyledNavbar = styled.nav`
  background-color: #4361ee;
  padding: 0.2rem 1.7rem;
  margin: 0 auto;
  color: #fff;

  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: #fff;
    transition: color 0.3s ease;

    &:hover {
      color: #60a5fa;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    ul {
      flex-direction: row;
    }

    li {
      margin: 0 1rem;
    }
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Heading color="white">Movie App</Heading>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movie/create">Add Movie</Link></li>
        <li><Link to="/movie/popular">Popular</Link></li>
        <li><Link to="/movie/now">Now Playing</Link></li>
        <li><Link to="/movie/top">Top Rated</Link></li>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;
