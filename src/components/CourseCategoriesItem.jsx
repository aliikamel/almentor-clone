import React from 'react'

function CourseCategoriesItem(props) {
    return (
        <div className='course-categories-item'>
            <a href="">
                <div className='categories-carousel-card' style={{ backgroundImage: "url(" + props.img + ")" }}>
                        <h2>{props.title}</h2>
                </div>
            </a>
        </div>
    )
}

export default CourseCategoriesItem



