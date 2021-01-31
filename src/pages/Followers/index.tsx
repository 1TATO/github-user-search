import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import api from '../../services/api';

import { DetailsHeader, FollowersContainer } from './styles';

interface UserParams {
  login: string;
}

interface UserData {
  login: string;
  avatar_url: string;
  followers: number;
}

interface FollowersData {
  id: string;
  login: string;
  avatar_url: string;
}

const Followers: React.FC = () => {
  const history = useHistory();
  const { params } = useRouteMatch<UserParams>();

  const [data, setData] = useState<UserData>();
  const [followers, setFollowers] = useState<FollowersData[]>([]);

  useEffect(() => {
    api.get(`users/${params.login}`).then(response => {
      setData(response.data);
    });
  }, [params.login]);

  useEffect(() => {
    api.get(`users/${params?.login}/followers`).then(response => {
      setFollowers(response.data);
    });
  }, [params?.login]);

  function goBack() {
    history.goBack();
  }

  return (
    <>
      <DetailsHeader>
        <button onClick={goBack}>
          <FiArrowLeft />
        </button>
        <p>{data?.followers} seguidores</p>
      </DetailsHeader>

      {
        followers.map((follower) => (
          <FollowersContainer key={follower.id}>
            <img src={follower.avatar_url} alt={follower.login} />
            <p>#{follower.login}</p>
            <FiArrowRight />
          </FollowersContainer>
        ))
      }
    </>
  )
}

export default Followers;