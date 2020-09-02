import Link from "next/link";
import { useRouter } from 'next/router'
import styled, { css } from "styled-components";

const Nav = () => {
  const router = useRouter()
  const { pathname } = router;
  return (
    <NavBar>
      <NavItem>
        <Link href="/">
          <NavText selected={pathname === '/'}>New</NavText>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/topStories">
          <NavText selected={pathname === '/topStories'}>Top</NavText>
        </Link>
      </NavItem>
      <NavRightItem>Made with ❤ in 🇦🇪 | Copyright © 2020</NavRightItem>
    </NavBar>
  );
};

const NavBar = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  width: 100%;
  padding: 0 12px;
`;

const NavItem = styled.li`
  margin-right: 1em;
  cursor: pointer;
 
`;
const NavRightItem = styled.li`
  margin-left: auto;
  font-size: ${({theme}) => theme.fontSize.extra_small};
`

const NavText = styled.span`
  padding: .5em 1em;
  border-radius: .5em;
  display: block;
  &:hover {
    background: ${({theme}) => theme.color.orange}; 
    color: white;
  }
  ${props => props.selected && css`
  background: ${({theme}) => theme.color.orange}; 
  color: white;
  `}
`;

export default Nav;
