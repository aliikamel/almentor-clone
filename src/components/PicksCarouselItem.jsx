import React from 'react'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { Fab } from '@mui/material';

function PicksCarouselItem(props) {
  return (
    <div className="carousel-item">
      <a href="">
        <div className="carousel-card">
          <img className='carousel-card-img' src={props.img} alt="" />
          <div className='carousel-card-info'>
            <div className='carousel-card-title'>
              <h3>{props.title}</h3>
            </div>
            <div className='carousel-card-body'>
              <p>{props.name}</p>
              <Fab size='small' id="bookmark-fab"><TurnedInNotIcon/></Fab>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default PicksCarouselItem