import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: #000;
  box-shadow:  0px 3px 6px  var(--red);
`

export const HeaderContext = styled.header`
  max-width: 1366px;
  height: 114px;

  padding: 0 55px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoSmall = styled.div`
  width: 122px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--red);

  span {
    padding-top: 10px;
    text-align: center;
    font-family: 'Marvel Regular';
    color: #fff;
    text-transform: uppercase;
    font-size: 50px;
    line-height: 0;
  }
`

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    display: flex;

    li {
      & + li {
        margin-left: 86px;
      }

      a {
        text-decoration: none;
        color: #404040;
        display: inline-block;
      }

      a:hover {
        color: #fff;
        transition: 0.3s ease-in;  
      }

      > a {
        font-family: "Axiforma Bold";
        font-size: 30px;
      }
    }
  }

  img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
  }
`

export const NavDivAvatar = styled.div`
  display: flex;
  align-items: center;
  > a {
    font-size: 20px;
    font-family: "Axiforma Light";
    margin-left: 15px;
  }
`