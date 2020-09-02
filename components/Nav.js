import Link from "next/link";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavBar>
      <NavItem>
        <Link href="/">
          <NavText>New</NavText>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/topStories">
          <NavText>Top</NavText>
        </Link>
      </NavItem>
    </NavBar>
  );
};

const NavBar = styled.ul`
  display: flex;
  list-style: none;
  padding-top: 1.4em;
`;

const NavItem = styled.li`
  margin-right: 1em;
`;

const NavText = styled.span`
  padding: .5em 1em;
  border-radius: .5em;
  &:hover, .selected {
    background: #FF6C47;
    color: white;
  }
`;

export default Nav;
