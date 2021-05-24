import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 114px);
`

export const Context = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SelectContainer = styled.div`
  align-self: flex-start;
  margin-left: 170px;
  padding-top: 16px;

  select {
    font-family: "Axiforma Bold";
    font-size: 16px;
    color: var(--red);
    border: 1px solid var(--red);
    width: 165px;
    height: 50px;
    padding: 16px;
    background-color: #000;
    border-radius: 10px;
  }

`