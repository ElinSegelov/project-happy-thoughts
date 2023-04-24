import React from 'react';
import { FaHeart } from 'react-icons/fa'

const LoadingComponent = () => {
  return (
    <div className="animation-container">
      <FaHeart className="heart-animation" />
      <p>Loading happy thoughts...</p>
    </div>
  )
}

export default LoadingComponent;
