import styled from "styled-components";


const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>Made with ❤ in 🇦🇪 | Copyright © 2020</FooterText>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 1em;
`
const FooterText = styled.p`
  font-size: 12px;
`


export default Footer;
