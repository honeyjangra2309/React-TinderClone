import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
export default function MainSection() {
  return (
    <div>
       <div className='d-flex justify-content-around mt-5 pt-3 container'>
       <div>
           <h3 className='mb-3'>LEGAL</h3>
           <Link to="privacy" style={{color:"#505965",textDecoration:"none"}}><h6>Privacy</h6></Link>
           <h6>Terms</h6>
           <h6>Cookie Policy</h6>
           <h6> Intellectual Property</h6>
        </div>
        <div>
           <h3 className='mb-3'>CAREERS</h3>
           <h6>Careers Blog</h6>
           <h6>Tech Blog</h6>
        </div>
        <div>
           <h3 className='mb-3'>SOCIAL</h3>
           <i className="fa fa-instagram" aria-hidden="true"></i>
           <i className="fa fa-twitter" aria-hidden="true"></i>
           <i className="fa fa-youtube" aria-hidden="true"></i>
           <i class="fab fa-tiktok"></i>
           <i className="fa fa-facebook" aria-hidden="true"></i>
        </div>
        <div>
           <h3 className='mb-3'>FAQ</h3>
           <h6>Destinations</h6>
           <h6 >Press Room</h6>
           <h6 >Contact</h6>
           <h6 >Promo code</h6>
        </div>
       </div>
       <div className='container'>
        <hr></hr>
       </div>
        <div className='container d-flex align-items-center'>
           <h4 className='m-3'>GET THE APP!</h4>
           <a href="https://open.tinder.com/kgco/af5c38d7"><img src="https://tinder.com/static/build/d256a5b510a685030be375c63a9010e9.webp" className='m-3' alt="" style={{width:"150px",height:"50px",cursor:"pointer"}}/></a>
           <a href="https://open.tinder.com/kgco/c283b688"><img src="https://tinder.com/static/build/03aed264f8539c570e9bc80ba6b60d92.webp" alt="" style={{width:"170px",height:"70px",cursor:"pointer"}}/></a>
        </div>
        <div className="container mt-3">
           <p  style={{color:"#505965"}}>Single people, listen up: If you’re looking for love, want to start dating, or just keep it casual, you need to be on Tinder. With over 55 billion matches made, it’s the place to be to meet your next best match. Let’s be real, the dating landscape looks very different today, as most people are meeting online. With Tinder, the world’s most popular free dating app, you have millions of other single people at your fingertips and they’re all ready to meet someone like you. Whether you’re straight or in the LGBTQIA community, Tinder’s here to bring you all the sparks.
              <br />
There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? Tinder U’s got you covered. Tinder isn’t your average dating site — it’s the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between.</p>
        </div>
        <div className='container'>
           <hr />
        </div>
        <div className='container d-flex justify-content-between align-items-center mt-3'>
           <p  style={{color:"#505965"}}>FAQ / Safety Tips / Terms / Cookie Policy / Privacy Settings</p>
           <p  style={{color:"#505965"}}>© 2022 Match Group, LLC, All Rights Reserved.</p>
        </div>
    </div>
  )
}
