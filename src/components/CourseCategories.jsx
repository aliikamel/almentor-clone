import React from 'react'
import CourseCategoriesItem from './CourseCategoriesItem';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function CourseCategories() {
    return (
        <div className='course-categories-container'>
            <div className="course-categories">
                <h2 className='course-categories-header'>
                    Course Categories
                </h2>
            </div>
            <div className='course-categories-carousel-container'>
                <div className="carousel">
                    <div className="categories-carousel-left">
                        <ChevronLeftIcon id="chevron-icon-l" />
                    </div>
                    <CourseCategoriesItem
                        title="Languages"
                        img="https://cdn-share.almentor.net/images/28590583c673c06ffc9510a9ee89599df2d9688220ebf52a626a3547e9ebae6f"
                    />
                    <CourseCategoriesItem
                        title="Arts & Design"
                        img="https://cdn-share.almentor.net/images/f319489fcd87b41e731f9e960301526f2c1b20e2787f7b6ff72087da9e907581"
                    />
                    <CourseCategoriesItem
                        title="Soft Skills"
                        img="https://cdn-share.almentor.net/images/b652b28c96255a87dd111af86644badcc8f2f49d6311674d365aec7f177cefe8"
                    />
                    <CourseCategoriesItem
                        title="Media, Photography & Film"
                        img="https://cdn-share.almentor.net/images/59fa91ac8678ae7f3428a57973f630d81751457845330688d737bb0bef417cb3"
                    />
                    <CourseCategoriesItem
                        title="Business Management"
                        img="https://cdn-share.almentor.net/images/1628ecb92f027d9341e12ed06468fe46ac0d22e838df7b6674d23ed5d2d1a3a1"
                    />
                    <div className="categories-carousel-right">
                        <ChevronRightIcon id="chevron-icon-r" />
                    </div>
                </div>
            </div>
            <div className='course-categories-btn-container'>
                <button className='btn btn-outline categories-btn'>Browse Courses</button>
            </div>
        </div>
    )
}

export default CourseCategories