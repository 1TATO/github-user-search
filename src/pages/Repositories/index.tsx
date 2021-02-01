import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FiArrowLeft, FiStar, FiUnlock, FiLock } from 'react-icons/fi';
import api from '../../services/api';

import UserHeader from '../../components/UserHeader';

import { DetailsHeader, RepositoriesContainer, Actions, Stars, Locks } from './styles';

interface UserParams {
  login: string;
}

interface UserData {
  login: string;
  avatar_url: string;
  public_repos: number;
}

interface RepositoryData {
  id: string;
  name: string;
  description: string;
  stargazers_count: number;
}

const Repositories: React.FC = () => {
  const { params } = useRouteMatch<UserParams>();

  const [data, setData] = useState<UserData>();
  const [repositories, setRepositories] = useState<RepositoryData[]>([]);

  useEffect(() => {
    api.get(`users/${params.login}`).then(response => {
      setData(response.data);
    });
  }, [params.login]);

  useEffect(() => {
    api.get(`users/${params.login}/repos`).then(response => {
      setRepositories(response.data);
    });
  }, [params.login]);

  return (
    <>
      <UserHeader>
        <p>{data?.public_repos} repositórios</p>
      </UserHeader>

      {
        repositories.map((repository) => (
          <RepositoriesContainer key={repository.id}>
            <h2>{repository.name}</h2>
            <p>{repository.description}</p>
            <Actions>
              <Stars>
                <FiStar />
                <span>{repository.stargazers_count}</span>
              </Stars>
              <Locks>
                <FiUnlock />
                <FiLock />
              </Locks>
            </Actions>
          </RepositoriesContainer>
        ))
      }
    </>
  )
}

export default Repositories;