import React from 'react'
import PicksCarouselItem from './PicksCarouselItem'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function Picks() {
    return (
        <div className='picks-container'>
            <div className='picks'>
                <h2 className='picks-header'>Picks</h2>
                <div className='picks-tab'>
                    <div className='tab-item'>
                        <a href="">
                            <span>Featured Courses</span>
                        </a>
                        <span className='tab-seperator'>|</span>
                    </div>
                    <div className='tab-item'>
                        <a href="">
                            <span>Most Viewed</span>
                        </a>
                        <span className='tab-seperator'>|</span>
                    </div>
                    <div className='tab-item'>
                        <a href="">
                            <span>New Courses</span>
                        </a>
                    </div>
                </div>
                <div className='focus-line-container'>
                    <div className='focus-line'></div>
                </div>
            </div>
            <div className='picks-carousel-container'>
                <div className='carousel'>
                    <a href="">
                        <div className='picks-carousel-left'>
                            <ChevronLeftIcon id="chevron-icon-l" />
                        </div>
                    </a>
                    <PicksCarouselItem
                        img="https://cdn-share.almentor.net/images/a6d4c144221d54f952592f1bf78d39b03c6ce1d646f53cb9ac852ae0c04edeb0"
                        title="Cinematic Lighting Masterclass"
                        name="Ayman Abou el Makarem"
                    />
                    <PicksCarouselItem
                        img="https://cdn-share.almentor.net/images/a552f962bfb19ba4ab5daee46182bf43c460d6b888b01f506422605be8c49e64"
                        title="Workplace Conflict: Challenges or Opportunities?"
                        name="Fady Serry Eldin"
                    />
                    <PicksCarouselItem
                        img="https://cdn-share.almentor.net/images/4158315aa6f96cd0e1762337f7d8cd8f22de4e86a01fb5a8f8f49ea917152a81"
                        title="Cinematic Lighting Masterclass"
                        name="Ivon Moharram"
                    />
                    <PicksCarouselItem
                        img="https://cdn-share.almentor.net/images/4813128ffa05d8d2e6a84d6ae1cd2f9674889a76cd5fa1c5cbe0880fbcb04ddc"
                        title="Professional Scrum Master"
                        name="Hebatalla Abdel-halim Mahmoud "
                    />
                    <PicksCarouselItem
                        img="https://cdn-share.almentor.net/images/ae7a908b1f92f1c1760702a696f8248731ee2cc6c1a81bcc2cecaad23090cd43"
                        title="Master Playing The Oud"
                        name="Ahmed Gamal"
                    />
                    <a href="">
                        <div className='picks-carousel-right'>
                            <ChevronRightIcon id="chevron-icon-r" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Picks