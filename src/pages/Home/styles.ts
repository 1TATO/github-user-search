import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 200px;
  background: #1F1F1F;
  color: #FFFFFF;

  padding: 25px;
  display: flex;
  justify-content: space-between;

  p {
    font-weight: bold;
  }

  a {
    font-weight: 300;
    color: #FFFFFF;
    text-decoration: none;

    svg {
      color: #D03434;
      margin-left: 12px;
    }
  }
`;

export const Profile = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: #fff;

  img {
    border-radius: 50%;
    height: 170px;
    width: 170px;
    margin-top: -80px;
    border: solid;
  }
`;

export const Info = styled.div`
  text-align: left;
  margin-top: 45px;

  h2 {
    font-size: 26px;
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  p {
    font-weight: 300;
    font-size: 18px;

    & + p {
      margin-top: 5px;
    }
  }
`;

export const Social = styled.div`
  margin-top: 45px;
  text-align: left;
  height: 100px;
  background: #5252525D;
  display: flex;
  justify-content: space-between;
  padding: 16px 40px 12px;

  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #fff;
    text-align: center;

    span {
      font-weight: bold;
      font-size: 40px;

      & + span {
        font-weight: 300;
        font-size: 17px;
      }
    }
  }
`;

export const Bio = styled.div`
  text-align: left;
  margin-top: 53px;

  h2 {
    font-size: 26px;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
    font-weight: 300;
  }
`;