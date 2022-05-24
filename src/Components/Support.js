import React from 'react'
import '../App.css'
export default function Support() {
  return (
    <div>
       <div className="container d-flex align-items-center justify-content-between mt-3">
           <img src="https://theme.zdassets.com/theme_assets/302164/e2bd933724b7744350510577cef454a487f069ce.png" alt="" style={{width:"150px"}}/>
           <span style={{color:"#d6002f",cursor:"pointer"}}>Back to Tinder</span>
       </div>
       <div className="container mt-5">
           <h1 className='mb-5' style={{fontSize:"44px",fontWeight:"800",lineHeight:"44px"}}>Hi.How can we help?</h1>
           <input type="text" placeholder='Search' className='mb-5'/>
       </div>
       <div className='container d-flex align-items-center justify-content-center mt-5 pt-5' style={{width:"100%"}}>
          <h6 style={{backgroundColor:"#d6002f",color:"white"}} className='p-4'>A Guide To Tinder</h6>
          <h6 style={{backgroundColor:"#FE5466",color:"white"}} className='p-4'>TroubleShooting</h6>
          <h6 style={{backgroundColor:"#FF7B58",color:"white"}} className='p-4'>Security & Privacy</h6>
          <h6 style={{backgroundColor:"#F65068",color:"white"}} className='p-4'>Safety & Reporting</h6>
       </div>
       <div className="container mt-5 d-flex justify-content-center align-items-center" style={{color:"#d6002f",cursor:"pointer"}}>
           <p className='m-4'>Privacy</p>
           <p className='m-4'>English(US)</p>
       </div>
    </div>
  )
}
