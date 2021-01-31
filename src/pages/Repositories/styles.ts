import styled from 'styled-components';

export const DetailsHeader = styled.header`
  background: #1F1F1F;
  height: 80px;
  color: #fff;
  font-weight: bold;
  display: flex;

  svg {
    margin: auto 20px;
    width: 30px;
    height: 30px;
  }

  p {
    margin: auto;
  }
`;

export const RepositoriesContainer = styled.div`
  position: relative;
  height: 150px;
  border-bottom: 1px solid #7070705A;
  color: #fff;
  max-width: 800px;
  margin: 40px auto;

  h2 {
    margin-left: 20px;
    font-size: 30px;
    font-weight: bold;
  }

  p {
    margin: 10px 0 10px 20px;
    font-size: 20px;
    font-weight: 300;
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

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Stars = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;

  svg {
    color: #FFCE00;
  }

  span {
    font-weight: 300;
    margin-left: 7px;
  }
`;

export const Locks = styled.span`
  margin-right: 50px;

  svg:first-child {
    color: #63BF1F;
    margin-right: 17px;

    & + svg {
      color: #CC042A;
    }
  }
`;