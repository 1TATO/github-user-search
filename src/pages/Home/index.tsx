import React, { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import api from '../../services/api';

import { Header, Profile, Info, Social, Bio } from './styles';

interface UserParams {
  login: string;
}

interface UserData {
  login: string;
  name: string;
  email: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  bio: string;
  location: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState<UserData | null>(null);

  const { params } = useRouteMatch<UserParams>();

  useEffect(() => {
    api.get(`/users/${params.login}`).then(response => {
      setData(response.data);
    });
  }, [params.login]);

  return (
    <>
      <Header>
        <p>#{data?.login}</p>

        <Link to="/">
          Sair
          <FiLogOut />
        </Link>
      </Header>

      <Profile>
        <img src={data?.avatar_url} alt={data?.name} />

        <Info>
          <h2>{data?.name}</h2>
          <p>{data?.email}</p>
          <p>{data?.location}</p>
        </Info>

        <Social>
          <Link to="#">
            <span>{data?.followers}</span>
            <span>Seguidores</span>
          </Link>

          <Link to="#">
            <span>{data?.following}</span>
            <span>Seguindo</span>
          </Link>

          <Link to="#">
            <span>{data?.public_repos}</span>
            <span>Repos</span>
          </Link>
        </Social>

        <Bio>
          <h2>BIO</h2>

          <p>{data?.bio}</p>
        </Bio>
      </Profile>
    </>
  )
}

export default Home;