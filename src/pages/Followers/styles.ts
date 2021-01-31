import styled from 'styled-components';

export const DetailsHeader = styled.header`
  background: #1F1F1F;
  height: 80px;
  color: #fff;
  font-weight: bold;
  display: flex;

  button {
    background: #1F1F1F;
    border: 0;
    color: #fff;
    
    svg {
      margin: auto 20px;
      width: 30px;
      height: 30px;
    }
  }

  p {
    margin: auto;
  }
`;

export const FollowersContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  color: #fff;
  border-bottom: 1px solid #7070705A;

  img {
    margin: 20px 30px 25px;
    border-radius: 50%;
    border: 2px solid #fff;
    height: 65px;
    width: 65px;
  }

  p {
    flex: 1;
    font-weight: bold;
  }

  svg {
    margin-right: 50px;
    height: 30px;
    width: 30px;
  }

  &::before {
    content: '';
    height: 42px;
    width: 10px;
    position: absolute;
    background: #FFCE00;
    left: 0;
    border-radius: 0 100px 100px 0;
  }
`;