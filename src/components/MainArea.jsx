import React from 'react'
import CourseCategories from './CourseCategories'
import Map from './Map'
import Instructors from './Instructors'
import Footer from "./Footer";


function MainArea() {
    return (
        <div className='main-area-container'>
            <CourseCategories />
            <Map/>
            <Instructors />
            <Footer />
        </div>
    )
}

export default MainArea