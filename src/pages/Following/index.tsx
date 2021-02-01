import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import api from '../../services/api';

import UserHeader from '../../components/UserHeader';
import NavBar from '../../components/NavBar';

import { FollowingContainer } from './styles';

interface UserParams {
  login: string;
}

interface UserData {
  login: string;
  avatar_url: string;
  following: number;
}

interface FollowData {
  id: string;
  login: string;
  avatar_url: string;
}

const Followers: React.FC = () => {
  const { params } = useRouteMatch<UserParams>();

  const [data, setData] = useState<UserData>();
  const [follows, setFollows] = useState<FollowData[]>([]);

  useEffect(() => {
    api.get(`users/${params.login}`).then(response => {
      setData(response.data);
    });
  }, [params.login]);

  useEffect(() => {
    api.get(`users/${params?.login}/following`).then(response => {
      setFollows(response.data);
    });
  }, [params?.login]);

  return (
    <>
      <UserHeader>
        <p>{data?.following} seguindo</p>
      </UserHeader>

      {
        follows.map((follow) => (
          <FollowingContainer key={follow.id}>
            <img src={follow.avatar_url} alt={follow.login} />
            <p>#{follow.login}</p>
            <FiArrowRight />
          </FollowingContainer>
        ))
      }

      <NavBar></NavBar>
    </>
  )
}

export default Followers;