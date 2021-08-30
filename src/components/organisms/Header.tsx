import styled from "styled-components";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <SHeader>
        <HeaderInner>
          <HeaderLogo to={{ pathname: "/" }}>Osyare Na ToDo App</HeaderLogo>
          <HeaderNav>
            <HeaderItem>
              <HeaderLink to={{ pathname: "/list" }}>LIST</HeaderLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderLink to={{ pathname: "/page" }}>Page</HeaderLink>
            </HeaderItem>
            <HeaderItem></HeaderItem>
          </HeaderNav>
        </HeaderInner>
      </SHeader>
    </>
  );
};

const SHeader = styled.div`
  background-color: #031d7c;
  padding: 10px 60px;
`;
const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
`;
const HeaderLogo = styled(Link)`
  font-family: "Staatliches", cursive;
  color: #fff;
  font-size: 32px;
`;
const HeaderNav = styled.ul`
  display: flex;
`;
const HeaderItem = styled.li``;

const HeaderLink = styled(Link)`
  font-family: "Staatliches", cursive;
  color: #fff;
  font-size: 32px;
  padding: 0 20px;
`;
