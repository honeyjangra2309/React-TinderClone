import React from 'react'
import {Swiper,SwiperSlide} from "swiper/react"
import 'swiper/css'
export default function Testimonial() {
  return (
    <div className='container mt-5'>
    <Swiper spaceBetween={50} slidesPerView={3}>
       <SwiperSlide>
           <div style={{border:".5px solid grey",opacity:"0.8",borderRadius:"10px",backgroundColor:"white"}} className="p-3">
              <h3>Gabriel and Fiance</h3>
              <hr />
              <p>I met my fiancé on tinder during the quarantine for COVID. She is from Lafayette, Indiana and I am from Cleveland, Ohio. We are both Christians who fell madly in love</p>
           </div>
       </SwiperSlide>
       <SwiperSlide>
       <div style={{border:".5px solid grey",opacity:"0.8",borderRadius:"10px",backgroundColor:"white"}} className="p-3">
              <h3>Ellisa Donahue</h3>
              <hr />
              <p>My college roommate and I both would stay up on Tinder, not looking for anything serious (also not looking for hookups though, just entertainment). My now husband and I matched on Tinder.</p>
        </div>
       </SwiperSlide>
       <SwiperSlide>
       <div style={{border:".5px solid grey",opacity:"0.8",borderRadius:"10px",backgroundColor:"white"}} className="p-3">
              <h3>Rebecca Lawton</h3>
              <hr />
              <p>He hit me with one the WORST pick up lines I had ever seen, but being bored at work, I decided to reply. From there we never stopped talking, dating each other and falling deeper in love.</p>
        </div>
       </SwiperSlide>
       <SwiperSlide>
       <div style={{border:".5px solid grey",opacity:"0.8",borderRadius:"10px",backgroundColor:"white"}} className="p-3">
              <h3>Sean & Mariana Polcha</h3>
              <hr />
              <p>I didn't think anything would ever come about from it, but one day I saw this stunning beauty come across the app. I Super Liked her, paying a dollar extra for the Super Like!</p>
        </div>
       </SwiperSlide>
       <SwiperSlide>
       <div style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",border:".5px solid grey",opacity:"0.8",borderRadius:"10px",backgroundColor:"white"}} className="p-3">
              <h3>Magdelena & Annie</h3>
              <hr />
              <p>I had just gotten out of a relationship, and Annie had just started dating women so we were both nervous and treading lightly for a little bit! We both fell hard and fast and knew we had found our person fairly quickly.</p>
        </div>
       </SwiperSlide>
       <SwiperSlide>
       <div style={{border:".5px solid grey",opacity:"0.8",borderRadius:"10px"}} className="p-3">
              <h3>Kenneth & Elliot</h3>
              <hr />
              <p>I honestly had been on many Tinder dates and was absolutely sure I was meeting a fling to get a free meal and have some fun…3 years and sooo many dates and memories later, I am married to my Tinder guy, Kenny!</p>
        </div>
       </SwiperSlide>
    </Swiper>
    </div>
  )
}
