import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  img {
    width: 200px;
    height: 200px;
    margin-bottom: 100px;
  }
`;

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  width: 550px;

  input {
    height: 56px;
    border-radius: 12px;
    margin-bottom: 35px;
    border: 0;
    padding: 16px 20px;
    color: #535353;
    border: 2px solid #fff;

    ${(props) => props.hasError && css`
      border-color: #EB2D2D;
    `}
  }
    
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    border-radius: 12px;
    border: 0;
    background: #FFCE00;
    color: #030202;
    font-weight: bold;
    transition: background-color 0.2s;    

    &:hover {
      background: #FFCE88;
    }

    svg {
      margin-left: 15px;
    }
  }
`;

export const Error = styled.span`
  font-weight: 500;
  font-size: 14px;
  color: #EB2D2D;
  margin: -70px calc(100% - 150px) 55px;
  width: 150px;
  font-weight: 500;
`;