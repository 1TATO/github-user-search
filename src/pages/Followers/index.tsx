import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { DetailsHeader, FollowersContainer } from './styles';

const Followers: React.FC = () => {
  return (
    <>
      <DetailsHeader>
        <FiArrowLeft />
        <p>10 seguidores</p>
      </DetailsHeader>

      <FollowersContainer>
        <img src="https://avatars.githubusercontent.com/u/42624981?s=460&u=188dc2e1e9964c8008135f43468f0db8db3cf70b&v=4" alt=""/>
        <p>#aniltonveiga</p>
        <FiArrowRight />
      </FollowersContainer>
      <FollowersContainer>
        <img src="https://avatars.githubusercontent.com/u/42624981?s=460&u=188dc2e1e9964c8008135f43468f0db8db3cf70b&v=4" alt=""/>
        <p>#aniltonveiga</p>
        <FiArrowRight />
      </FollowersContainer>
      <FollowersContainer>
        <img src="https://avatars.githubusercontent.com/u/42624981?s=460&u=188dc2e1e9964c8008135f43468f0db8db3cf70b&v=4" alt=""/>
        <p>#aniltonveiga</p>
        <FiArrowRight />
      </FollowersContainer>
    </>
  )
}

export default Followers;