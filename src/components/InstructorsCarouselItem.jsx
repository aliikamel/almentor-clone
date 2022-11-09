import React from 'react'

function InstructorsCarouselItem(props) {
    return (
        <div className='instructors-carousel-item'>
            <a href="">
                <div className="instructors-carousel-card">
                    <img className='instructors-carousel-card-img' src={props.img} alt="" />
                    <div className='instructors-carousel-card-info'>
                        <div className='instructors-carousel-card-title'>
                            <h3>{props.name}</h3>
                        </div>
                        <div className='carousel-card-body'>
                            <p>{props.title}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default InstructorsCarouselItem