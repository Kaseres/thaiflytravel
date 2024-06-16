import React from 'react'
import Card from './tab/Card'
import FeatureList from './tab/FeatureList'

const FeatureDestination = () => {
  return (
    <div className='md:container md:mx-auto mx-10'>
      <div className="text-[24px]">เส้นทางยอดนิยม</div>
      <div className="text-[14px] text-gray-600">ทัวร์มาใหม่ ราคาถูกที่สุด ในจุดหมายปลายทางยอดนิยม</div>
      <Card />
      <FeatureList />
    </div>
  )
}

export default FeatureDestination
