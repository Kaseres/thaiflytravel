import React from 'react';
import styles from './home.module.css';
import MainContainer from '@/components/contaner/MainContainer';
import SearchDestination from './SearchDestination';
import FeatureDestination from './FeatureDestination';
import GroupTourDestination from './GroupTourDestination';

const Home = () => {
  return (
    <MainContainer>
      <div className={`bg-blue-500 min-h-[200px] py-5`} >
        <SearchDestination />
      </div>
      <div className={`bg-white py-5`} >
        <FeatureDestination />
      </div>
      <div className={`bg-white py-5`} >
        <GroupTourDestination />
      </div>
    </MainContainer>
  )
}

export default Home
