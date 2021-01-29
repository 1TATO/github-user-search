import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import { Container, Form } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Github" />

      <Form action="">
        <input placeholder="Usuário" />
        <button type="submit">
          Entrar
          <FiArrowRight />
        </button>
      </Form>
    </Container>
  );
}

export default Login;