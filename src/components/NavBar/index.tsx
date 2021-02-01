import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiHome, FiGithub, FiUsers } from 'react-icons/fi';
import api from '../../services/api';

import { Container } from './styles';

interface UserParams {
  login: string;
}

interface UserData {
  login: string;
  name: string;
  email: string;
  company: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  bio: string;
  location: string;
}

interface FollowData {
  id: string;
  login: string;
  avatar_url: string;
}

interface FollowersData {
  id: string;
  login: string;
  avatar_url: string;
}

interface RepositoryData {
  id: string;
  name: string;
  description: string;
  stargazers_count: number;
}

const NavBar: React.FC = () => {
  const [data, setData] = useState<UserData | null>(null);
  const [follows, setFollows] = useState<FollowData[]>([]);
  const [followers, setFollowers] = useState<FollowersData[]>([]);
  const [repositories, setRepositories] = useState<RepositoryData[]>([]);

  const { params } = useRouteMatch<UserParams>();

  useEffect(() => {
    api.get(`/users/${params.login}`).then(response => {
      setData(response.data);
    });
  }, [params.login]);

  useEffect(() => {
    api.get(`users/${params?.login}/following`).then(response => {
      setFollows(response.data);
    });
  }, [params?.login]);

  useEffect(() => {
    api.get(`users/${params?.login}/followers`).then(response => {
      setFollowers(response.data);
    });
  }, [params?.login]);

  useEffect(() => {
    api.get(`users/${params.login}/repos`).then(response => {
      setRepositories(response.data);
    });
  }, [params.login]);

  return (
    <Container>
      <Link to={`/home/${params.login}`}>
        <FiHome />
        Home
      </Link>
      <Link to={`/${params.login}/repos`}>
        <FiGithub />
        Repos
      </Link>
      <Link to={`/${params.login}/followers`}>
        <FiUsers />
        Seguidores
      </Link>
      <Link to={`/${params.login}/following`}>
        <FiUsers />
        Seguindo
      </Link>
    </Container>
  )
}

export default NavBar;