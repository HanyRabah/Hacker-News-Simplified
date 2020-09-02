import styled from "styled-components";
import Link from "next/link";

const Custom404 = () => {
  return (
    <ErrorPage>
      <ErrorWrapper>
        <Error404>
          <Error404Title>Oops! Page not found</Error404Title>
          <Error404MessageWrapper>
            <Error404Message>4</Error404Message>
            <Error404Message>0</Error404Message>
            <Error404Message>4</Error404Message>
          </Error404MessageWrapper>
        </Error404>
        <Link href="/">
          <span> Back Home</span>
        </Link>
      </ErrorWrapper>
    </ErrorPage>
  );
};

const ErrorPage = styled.div`
  position: relative;
  height: 100%;
  padding-top: 80px;
`;
const ErrorWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
const Error404 = styled.div`
  position: relative;
  height: 300px;
`;
const Error404Title = styled.h3`
  position: relative;
  font-size: ${props => props && props.theme.fontSize.default};
  font-weight: 700;
  text-transform: uppercase;
  color: gray;
  margin: 0px;
  letter-spacing: 3px;
  padding-left: 6px;
`;

const Error404MessageWrapper = styled.h1`
  font-size: 252px;
  font-weight: 900;
  margin: 0px;
  letter-spacing: -40px;
  line-height: 200px;
  color: gray;
`;

const Error404Message = styled.span`
  text-shadow: -8px 0px 0px #fff;
`;

export default Custom404;
