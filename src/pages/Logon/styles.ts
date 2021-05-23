import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 55px;
  height: 100vh;
  max-width: 1366px;
  display: flex;
  align-items: center;
`

export const Content = styled.div`
  width: 383px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Axiforma Bold';
    color: var(--red);
    font-size: 30px;
    align-self: flex-start;
    line-height: 0;
    margin-bottom: 16px;
  }

  >span {
    align-self: flex-start;
    font-family: 'Axiforma Light';
    color: var(--gray);
    font-size: 20px;
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 237px;
  height: 95px;
  background: var(--red);

  padding-top: 20px;
  margin-bottom: 58px;
  
  p {
    text-align: center;
    font-family: 'Marvel Regular';
    color: #fff;
    text-transform: uppercase;
    font-size: 100px;
    line-height: 0;
  }
`

export const CheckForm = styled.div`
  display: flex;
  align-items: center;
  
  label {
    margin-left: 4px;
  }
`

export const OptionsForm = styled.div`
  display: flex;
  color: var(--gray);
  font-family: 'Axiforma Medium';
  font-size: 15px;
  align-items: center;
  margin-top: 30px;
  padding: 0 12px;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: var(--gray);
    border-bottom: 1px solid red;
  }

`

export const Form = styled.form`
  input[type=text] {
    margin-top: 21px;
  }
  input[type=password] {
    margin-top: 18px;
  }

  input[type=text], input[type=password]{
    width: 100%;
    height: 73px;
    border-radius: 30px;
    border: none;
  }

  input[type=text], input[type=password],::placeholder{
    color: var(--gray);
    font-family: 'Axiforma Light';
    font-size: 22px;
    padding: 28px 28px 23px;
  }

  >a {
    margin-top: 24px;
    display: block;
    width: 100%;
    height: 65px;
    font-family: "Axiforma Medium";
    font-size: 28px;
    color: #fff;
    text-decoration: none;
    background-color: var(--red);
    border-radius: 30px;
    text-align: center;
    line-height: 65px;
  }

  span {
   display: inline-block;
   width: 100%;
   text-align: center;
    
    margin-top: 30px;

    font-family: "Axiforma Medium";
    font-size: 16px;
    color: var(--gray);

    a {
      margin-left: 4px;
      text-decoration: none;
      color: var(--red);
    }
  }
`