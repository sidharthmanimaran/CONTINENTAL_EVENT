import React from 'react';
import Img1 from '../assets/images/back-1.jpg';
import '../assets/css/Home.css';
import Insta from '@mui/icons-material/Instagram'
import Face from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
import Youtube from '@mui/icons-material/YouTube'

function Home() {
  return (
    <div>
      <div className="images">
        <img src={Img1} alt="Background" />
      </div>
      <footer className="small-footer">
      <form>
      <p>@2023 CONTINENTAL EVENT</p>
      </form>
      <form>
      <li><Insta/><Face/><Twitter/><Youtube/></li>
      </form>
      </footer>
    </div>
  );
}

export default Home;
