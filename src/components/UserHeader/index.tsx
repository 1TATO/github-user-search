import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';

const UserHeader: React.FC = ({ children, ...rest }) => {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }

  return (
    <Container>
      <button onClick={goBack}>
        <FiArrowLeft />
      </button>
      <p {...rest}>{children}</p>
    </Container>
  )
}

export default UserHeader;