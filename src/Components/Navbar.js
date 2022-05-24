import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
export default function Navbar() {
 const [open, setopen] = useState(false);
 const handleClickToOpen = () => {
  setopen(true);
};
const handleToClose = () => {
  setopen(false);
};
  return (
    <div style={{backgroundImage: "url(https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp)",width:"100vw",height:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"100vw 100vh"}}>
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#0006"}}>
  <div className="container-fluid" >
    <Link to="/"><svg viewBox='0 0 519 123' style={{width:"150px"}}>
    <g fill='white' fillRule="evenodd"><title>Tinder</title>
    <path d="M31.5 49.6C55 41.5 59 20.4 56 1c0-.7.6-1.2 1.2-1C79.7 11 105 35 105 71c0 27.6-21.4 52-52.5 52a50 50 0 0 1-28.2-92.7c.6-.4 1.4 0 1.4.7.3 3.7 1.3 13 5.4 18.6h.4z" fill="var(--color--white, inherit)"></path>
    <path d="M171.2 101.1l1.7-2 5.3 16.8-.7.7c-4 3.7-10 5.6-17.7 5.6h-.3c-7 0-12.5-2-16.3-5.7-3.8-3.8-5.8-9.5-5.8-16.7V54h-13.5V35.5h13.5V13.2h20.8v22.3h16.5V54h-16.6v41.3c0 1.9.5 8 6.3 8 3 0 5.8-1.1 6.8-2.3zm11 19.2V35.6H203v84.7h-20.8zM192.5 1A12.5 12.5 0 1 1 180 13.6C180 6.8 185.7 1 192.5 1zm66.4 32.5c18 0 27.9 9.8 27.9 27.7v59H266V66.2c-.4-9.6-5-14-14.8-14-8.8 0-15.9 5.4-19.5 10v58h-20.8V35.7h20.8v9c6-5.8 15.6-11 27.2-11zM356 44.4V4.6h20.8v115.8H356v-8.8a34.3 34.3 0 0 1-24.7 10.7c-22.7 0-37.9-17.8-37.9-44.3 0-26.6 15.2-44.4 37.9-44.4A34 34 0 0 1 356 44.4zm0 17.9a25.6 25.6 0 0 0-19.6-10c-12.9 0-21.5 10.3-21.5 25.7 0 15.3 8.6 25.6 21.5 25.6 7.5 0 15.7-4 19.6-9.8V62.3zm69.4-28.7c24.6 0 41.7 19 41.7 46v5.7h-62.9c2.1 11.9 11.5 19.5 24.3 19.5 8.1 0 17-3.5 22.1-8.6L452 95l9.9 14.2-1 .9a48.6 48.6 0 0 1-34.1 12.2c-26 0-44.3-18.3-44.3-44.4a42.8 42.8 0 0 1 43-44.3zm-21.3 36h42.7c-1.2-12.7-11.7-18.5-21.4-18.5-14.6 0-20.1 11-21.3 18.6zm113.3-36h1.5v21l-1.8-.3c-1.5-.3-3.4-.5-5.3-.5-6.7 0-16 4.7-19.5 9.7v56.7h-20.8V35.6h20.9V45c6.9-7.2 16-11.4 25-11.4z" fill="var(--color--white, inherit)"></path></g>
    </svg></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color:"white"}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center" style={{fontSize:"22px"}} >
        <li className="nav-item m-3">
          <a className="nav-link"  aria-current="page" href="/" style={{color:"white"}}> <span> Products</span></a>
        </li>
        <li className="nav-item m-3">
          <a className="nav-link" href="/" style={{color:"white"}}> <span>Learn</span> </a>
        </li>
        <li className="nav-item m-3">
          <a className="nav-link" href='/' style={{color:"white"}}> <span>Safety</span> </a>
        </li>
        <li className="nav-item m-3">
          <Link className="nav-link" to="support" style={{color:"white"}}> <span>Support</span> </Link>
        </li>
        <li className="nav-item m-3">
          <Link className="nav-link" to="download" style={{color:"white"}}> <span>Download</span> </Link>
        </li>
      </ul>
      <div className='d-flex align-items-center justify-content-around' style={{width:"250px",fontSize:"22px"}}>
          <div>
      <svg focusable="false" fill='white' aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="24px" height="24px" class="Sq(16px) Op(.9) Va(m) Mend(8px) Va(m)"><path fill="" d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path></svg>
      <span>English</span>
          </div>
      <button type="button" class="btn"  onClick={handleClickToOpen} style={{color:"#d6002f",backgroundColor:"#fff",width:"100px",fontSize:"20px"}}>Log in</button>
      </div>
    </div>
  </div>
</nav>
   <div style={{backgroundColor:"#0006",width:"100%",height:"90%",color:"#fff"}} className="d-flex justify-content-center align-items-center flex-column">
      <h1 style={{fontSize:"100px"}}>Start something epic</h1>
      <button type="button" class="btn" onClick={handleClickToOpen} style={{color:"#FFF",background:"linear-gradient(45deg,#fd267a,#ff6036)",borderRadius:"25px",width:"260px",height:"50px"}}>Create Account</button>
   </div>
   <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>
          <div className='d-flex flex-column justify-content-center align-items-center'>
        <svg focusable="false" aria-hidden="true" role="presentation" viewBox="0 0 24 24" width="40px" height="40px"><path d="M8.21 10.08c-.02 0-.04 0-.06-.02-.67-.9-.84-2.44-.89-3.03 0-.11-.13-.18-.23-.12C4.93 8.08 3 10.86 3 13.54 3 18.14 6.2 22 11.7 22c5.15 0 8.7-3.98 8.7-8.46 0-5.87-4.2-9.77-7.93-11.53a.13.13 0 0 0-.19.14c.48 3.16-.18 6.6-4.07 7.93z" fill='#d6002f'></path></svg>
        <h5 className='mt-2 text-center'>GET STARTED</h5>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            By clicking login,you agree to our Terms.Learn how we <br /> process your data in our PrivacyPolicy and CookiePolicy.
          </DialogContentText>
          <DialogContentText>
            <h5 className='text-center' style={{cursor:"pointer"}}>MORE OPTIONS</h5>
            <hr />
            <h3 className='text-center mt-3' style={{color:"black"}}>GET THE APP!</h3>
            <div className='d-flex justify-content-around align-items-center'>
              <img src="https://tinder.com/static/build/d256a5b510a685030be375c63a9010e9.webp" alt="" style={{width:"120px",cursor:"pointer"}} />
              <img src="https://tinder.com/static/build/03aed264f8539c570e9bc80ba6b60d92.webp" alt="" style={{width:"150px",cursor:"pointer"}}/>
            </div>
          </DialogContentText>
        </DialogContent>
       
      </Dialog>
    </div>

  )
}
