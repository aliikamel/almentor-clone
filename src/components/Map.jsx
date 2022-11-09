import React from 'react'

function Map() {
  return (
    <div className='map-container'>
        <div className="map-img-conatiner">
              <img className='map-img' src="https://www.almentor.net/assets/images/map.svg" alt="" />
        </div>
        <div className="map-content">
            <p className='map-counter'>3,453,140</p>
            <p className='map-subheading'>Learning experiences</p>
            <p className='map-subheading'>worldwide</p>
            <p className='map-small-text'>& counting</p>
        </div>
        <div className='map-btn-container'>
            <button className='btn red-btn map-btn'>Browse Courses</button>
        </div>
    </div>
  )
}

export default Map