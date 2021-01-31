import React from 'react';
import { FiArrowLeft, FiStar, FiUnlock, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { DetailsHeader, RepositoriesContainer, Actions, Stars, Locks } from './styles';

const Repositories: React.FC = () => {
  return (
    <>
      <DetailsHeader>
        <FiArrowLeft />
        <p>10 repositorios</p>
      </DetailsHeader>

      <RepositoriesContainer>
        <h2>brasiliapp-react-native</h2>
        <p>Repository for centralization of the BrasiliApp mobile project</p>
        <Actions>
          <Stars>
            <FiStar />
            <span>32</span>
          </Stars>
          <Locks>
            <FiUnlock />
            <FiLock />
          </Locks>
        </Actions>
      </RepositoriesContainer>
    </>
  )
}

export default Repositories;