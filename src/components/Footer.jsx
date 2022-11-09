import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <footer>
            <div className='footer'>
                <div className='footer-container'>
                    <div className="footer-content">
                        <img src="https://www.almentor.net/assets/images/images-logo-placeholder.svg" alt="" />
                        <a href="">About</a>
                        <a href="">Press</a>
                        <a href="">Team</a>
                        <a href="">Contact</a>
                    </div>
                    <div className="footer-content">
                        <h3>Explore</h3>
                        <a href="">Browse courses </a>
                        <a href="">Popular courses</a>
                        <a href="">Subscription Plans</a>
                        <a href="">Instructors</a>
                        <a href="">Learning Partners</a>
                    </div>
                    <div className="footer-content footer-content-3">
                        <h3>Business</h3>
                        <a href="" style={{ textDecoration: "underline", marginBottom: "16px", marginTop: "4px" }}>Become an Instructor</a>
                        <button className='btn footer-btn'>Train Your Team</button>
                    </div>
                    <div className="footer-content-4">
                        <div className='install'>
                            <p>Our new app is coming soon</p>
                            <div className='install-img'>
                                <img src="https://www.almentor.net/assets/images/app-store.svg" alt="" />
                                <img src="https://www.almentor.net/assets/images/play-store.svg" alt="" />
                            </div>
                        </div>
                        <h4 className='footer-h4'>Find talks & books on</h4>
                        <img className='footer-logo' src="https://www.almentor.net/assets/images/kalimat-logo-white-new.svg" alt="" />
                    </div>
                </div>
                <div className="lower-footer">
                    <div className='lower-footer-left'>
                        <p>© 2022 <a href="">almentor.net</a></p>
                        <a href="">Terms of use</a>
                        <a href="">Privacy policy</a>
                        <a href="" style={{ textDecoration: "" }}>Help Center</a>
                    </div>
                    <div className="lower-footer-right">
                        <LinkedInIcon id="linkedin" />
                        <FacebookIcon id="facebook"/>
                        <InstagramIcon id="instagram" />
                        <YouTubeIcon id="youtube" />
                        <TwitterIcon id="twitter" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer