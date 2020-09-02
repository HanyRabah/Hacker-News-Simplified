import styled from "styled-components";
import { useRouter } from 'next/router'
import { Header } from "@/components";

const Layout = ({ children }) => {
  const router = useRouter();

  const backToTop = () => {
    router.push(router.pathname).then(() => window.scrollTo(0, 0));
  }

  return (
    <PageWrapper>
        <BackToTop onClick={backToTop} icon="./icons/chevron-up.png" />
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  background-color: #e2e8f0;
  min-height: 100vh;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1em;
`;

const Content = styled.div`
  min-height: 80vh;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;
const BackToTop = styled.div`
  position: fixed;
  bottom: 12px;
  right: 12px;
  background: url(${props => props.icon && props.icon}) #eee no-repeat;
  background-size: 50%;
  background-position: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
`

export default Layout;
