import React, { useState, FormEvent } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import { Container, Form, Error } from './styles';

const Login: React.FC = () => {
  const [searchUser, setSearchUser] = useState('');
  const [inputError, setInputError] = useState('');
  const history = useHistory();

  async function handleSearchUsername(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!searchUser) {
      setInputError('Campo obrigatório');
      return;
    }

    try {
      const response = await api.get(`users/${searchUser}`);

      console.log(response.data);
      history.push(`/home/${searchUser}`);
      setSearchUser('');
      setInputError('');
    } catch (err) {
      setInputError('Usuário inválido');
      setSearchUser('');
    }
  }

  return (
    <Container>
      <img src={logoImg} alt="Github" />

      <Form hasError={!!inputError} onSubmit={handleSearchUsername}>
        <input
          value={searchUser}
          onChange={e => setSearchUser(e.target.value)}
          placeholder="Usuário"
        />
        {inputError && <Error>{inputError}</Error>}
        <button type="submit">
          Entrar
            <FiArrowRight />
        </button>
      </Form>
    </Container>
  );
}

export default Login;