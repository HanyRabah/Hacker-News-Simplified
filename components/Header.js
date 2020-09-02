
import styled from 'styled-components';
import Link from 'next/link';
import { Nav } from '@/components';


const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogoWrapper>
        <Link href="/">
          <HeaderLogo src="/logo.svg" alt="Hacker News Logo" />
        </Link>
      </HeaderLogoWrapper>
      <Nav />
    </HeaderWrapper>
  )
};


const HeaderWrapper = styled.div`
  margin-bottom: 1em;
  display: flex;
`
const HeaderLogoWrapper = styled.div`
  width: 25%;
`
const HeaderLogo = styled.img`
  width: 150px;
  object-fit: contain;
  cursor: pointer;
  transition: opacity 0.3s ease-out;
  &:hover {
    opacity: 0.7
  }
`


export default Header;
