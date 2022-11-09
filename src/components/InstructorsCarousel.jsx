import React from 'react'
import InstructorsCarouselItem from './InstructorsCarouselItem'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function InstructorsCarousel() {
    return (
        <div className='instructors-carousel-container'>
            <div className='carousel'>
                <a href="">
                    <div className='instructors-carousel-left'>
                        <ChevronLeftIcon id="chevron-icon-l" />
                    </div>
                </a>
                <InstructorsCarouselItem
                    img="https://cdn-share.almentor.net/images/630ea017e1194392164c075b742d03f6b065c9133b761736cf213042b0c09080"
                    name="Ahmed Fikry"
                    title="Digital Strategy & Transformation Thought Leader"
                />
                <InstructorsCarouselItem
                    img="https://cdn-share.almentor.net/images/2f54a80d48304403631ce363ed4484fc6474d42303f6104f53ac5e99e86bf109"
                    name="Doha Moustafa"
                    title="Art Teacher & Visual Artist"
                />
                <InstructorsCarouselItem
                    img="https://cdn-share.almentor.net/images/9705b2aebf4256cddaeaaf2998b023b658139ce22834a1bd12ff92f9013fe878"
                    name="Nashwa El Fooly"
                    title="Life Coach"
                />
                <InstructorsCarouselItem
                    img="https://cdn-share.almentor.net/images/3b02399db14bde1b3f063bb4f92d94372d2eaf0c8438328838fcd5f82f333cf0"
                    name="Mohammed Essam"
                    title="Researcher & Assistant Teacher in the field of computer Science and AI"
                />
                <InstructorsCarouselItem
                    img="https://cdn-share.almentor.net/images/4e7673ebcfc6ce6fe749c085aec33cff556098153b4c77bccbedc92c1c3448e9"
                    name="Fadi Serry Eldin"
                    title="Managing Director - Scitron Training"
                />
                <a href="">
                    <div className='instructors-carousel-right'>
                        <ChevronRightIcon id="chevron-icon-r" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default InstructorsCarousel