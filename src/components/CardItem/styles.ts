import styled from 'styled-components';

export const CardContainer = styled.div `
  width: 289px;
  height: 439px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
`

export const CardInfo = styled.article `
  background: linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(255,255,255,0) 100%);
  border-radius: 30px;
  position: absolute;
  bottom:0;
  left: 0;
  right: 0;
  z-index: 1;

  width: 100%;
  height: 234px;

  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 23px 23px 28px;

  h2 {
    font-family: "Axiforma Bold";
    font-size: 20px;
    color: #fff;
    text-align: center;

  }

  p {
    font-family: "Axiforma Thin";
    font-size: 12px;
    color: #fff;
  }

  a {
    font-family: "Axiforma Thin";
    font-size: 20px;
    color: #fff;
    text-decoration: none;
  }
`