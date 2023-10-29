import styled from "styled-components";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <StyledHeader>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/input">Input</NavLink>
    </StyledHeader>
  );
}

const StyledHeader = styled("div")`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export default Header;
