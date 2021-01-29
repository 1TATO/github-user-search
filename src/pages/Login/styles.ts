import styled from 'styled-components';

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 550px;

  input {
    height: 56px;
    border-radius: 12px;
    margin-bottom: 19px;
    border: 0;
    padding: 16px 20px;
    color: #535353;
  }

  button {
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