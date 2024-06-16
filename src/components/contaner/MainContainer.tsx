import React from 'react';

type propsType = {
  children: React.ReactNode;
};

const MainContainer = ({children} : propsType) => {
  return (
    <div className='mx-auto'>
      {children}
    </div>
  )
}

export default MainContainer
