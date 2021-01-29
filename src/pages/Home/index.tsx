import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Header, Profile, Info, Social, Bio } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <p>#anilton.veiga</p>

        <Link to="/">
          Sair
          <FiLogOut />
        </Link>
      </Header>

      <Profile>
        <img src="https://avatars.githubusercontent.com/u/42624981?s=460&u=188dc2e1e9964c8008135f43468f0db8db3cf70b&v=4" alt="" />

        <Info><h2>ANILTON VEIGA</h2>
          <p>anilton.veiga@gmail.com</p>
          <p>Itai/SP</p>
        </Info>

        <Social>
          <Link to="#">
            <span>32</span>
            <span>Seguidores</span>
          </Link>

          <Link to="#">
            <span>32</span>
            <span>Seguindo</span>
          </Link>

          <Link to="#">
            <span>10</span>
            <span>Repos</span>
          </Link>
        </Social>

        <Bio>
          <h2>BIO</h2>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci voluptas vitae vero, obcaecati, molestiae sint cupiditate nemo dicta sit saepe, dignissimos possimus enim iure repellendus laudantium doloremque assumenda iusto minus!</p>
        </Bio>
      </Profile>
    </>
  )
}

export default Home;