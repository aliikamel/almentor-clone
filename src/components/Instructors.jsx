import React from 'react'
import InstructorsCarousel from './InstructorsCarousel'

function Instructors() {
    return (
        <div className='instructors-container'>
            <div className="instructors-content">
                <h2>Our Instructors</h2>
                <p>Our instructors are real world experts bringing real knowledge and offering unique experiences that will help you reach your personal and career goals.
                </p>
                <InstructorsCarousel />
                <div className='instructors-btn-container'>
                    <button className='btn instructors-btn'>See all Instructors</button>
                </div>
            </div>
        </div>
    )
}

export default Instructors