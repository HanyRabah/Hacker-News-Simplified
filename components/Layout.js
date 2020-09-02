import styled from "styled-components";
import { Header, Footer } from "@/components";

const Layout = ({ children }) => {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <Content>{children}</Content>
        <Footer />
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
  padding: 0.5em;
  min-height: 80vh;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export default Layout;
