import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 -3px 6px #00000029;
  height: 80px;
  border-radius: 20px 20px 0 0;
  padding: 0 200px;

  display: flex;
  text-align: center;
  justify-content: space-between;

  a {
    color: #000000;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
`;