import React from 'react';

import './Home.css';

// import logo from '../images/newdoctor.jpg';
import search from '../images/search-logo.jpg';
import searchone from '../images/searchone.jpg';
import searchthree from '../images/searchthree.jpg';
import teamlogo from '../images/team.jpg';
import teamone from '../images/team1.jpg';
import teamtwo from '../images/team2.jpg';
import teamthree from '../images/team3.jpg';
import lablogo from '../images/lab.jpg';
import labone from '../images/lab1.jpg';
import labtwo from '../images/lab2.jpg'; 
import labthree from '../images/lab4.jpg';
import labfour from '../images/lab5.jpg';
import labfive from '../images/lab6.jpg';
import doctors from '../images/finaldoctor.jpg';



const Home = () => {
  return (
    <>
      <div className="banner-logo">

      {/* <img src={logo} alt="doctors-images" /> */}
        <div className="text-block">
          <h1>We Work For Your Health</h1>
          <p>Stay Happy,Stay Fit,Stay Safe!.</p>
        </div>
      </div>
      
  <div>
    <h1 className="about">About us</h1>
    <p className="para">Nor again is there who loves or pursues or desire to obtain pain of<br/>
     itself, because it is pain, but because occasionally pleasure.
  </p>
  </div>
     <div className="all-logo">
       <img src={search} alt="logo"/>
       <img src={searchone} alt="second-logo"/>
       <img src={searchthree}  alt="third-logo"/>
     </div>
       
    <div>
      <h1 className="team">Our Doctor's Team</h1>
    </div>
       <div className="team-logo">
         <img src={teamlogo}  alt="team-logo-one"/>
         <img src={teamone}  alt="team-logo-two"/>
         <img src={teamtwo}  alt="team-logo-three"/>
         <img src={teamthree}  alt="team-logo-four"/> 
       </div>

         <div>
           <h1 className="services">Our Services</h1>
           <p className="para-details">We Are Provide both Services Online or Offline for Contact to a Doctor.</p>
         </div>


         <div className="container">
        <div className="card">
  <img src={teamone} alt="Denim Jeans"/>
  <h1 className="title">Dr. Shanili(M.B.B.S)</h1>
  <p className="price">Price:500 Rupees</p>
  <p className="heart">Domain:Cardiology (Heart Care)</p>
  <p className="email">Contact to email:shalinigupta12@gmail.com</p>
  <p>OR</p>
  <p>Contact to Phone Number: 9999915168</p>
  <p><button>Contact</button></p>
</div>
<div className="card">
  <img src={teamtwo} alt="Denim Jeans"/>
  <h1 className="title">Dr.Maxmillian(M.B.B.S)</h1>
  <p className="price">Price:500 Rupees</p>
  <p className="heart">Domain:Oncology (Cancer Care)</p>
  <p className="email">Contact to email:maxmillian55@gmail.com</p>
  <p>OR</p>
  <p>Contact to Phone Number: 9999368881</p>
  <p><button>Contact</button></p>
</div>
</div>

<div className="containers">
        <div className="card">
  <img src={teamlogo} alt="Denim Jeans"/>
  <h1 className="title">Dr. JohnDoe (M.B.B.S)</h1>
  <p className="price">Price:500 Rupees</p>
  <p className="heart">Domain:Neurology.</p>
  <p className="email">Contact to email:johndoe162@gmail.com</p>
  <p>OR</p>
  <p>Contact to Phone Number: 8470011099</p>
  <p><button>Contact</button></p>
</div>
<div className="card">
  <img src={teamthree} alt="Denim Jeans"/>
  <h1 className="title">Dr.Evelyn (M.B.B.S)</h1>
  <p className="price">Price:500 Rupees</p>
  <p className="heart">Domain:Bone Marrow Transplant.</p>
  <p className="email">Contact to email:evelyn06@gmail.com</p>
  <p>OR</p>
  <p>Contact to Phone Number: 9965324170</p>
  <p><button>Contact</button></p>
</div>
</div>
 
       <div>
         <h1 className="labs">Our Labs</h1>
       </div>
         <div>   
         <img className="labs-image" src={lablogo} alt="lablogo"/> 
         <img className="labs-image" src={labone} alt="lab"/>
    </div>
   <div>
     <img className="labs-image" src={labtwo} alt="lablogo"/>
     <img className="labs-image" src={labthree} alt="lablogo"/>
   </div>
          <div>
            <img className="labs-image"  src={labfour} alt="lablogo"/>
            <img className="labs-image" src={labfive} alt="lablogo"/>
          </div>

      <div className="container-small">
        <img className="doctors-image" src={doctors} alt="doctors" />
        <h1 className="bottom-centered">Find A Doctor Today And Book Your Appointment Now</h1>
        <button className="bottom-centered-btns">Book Online</button>
      </div>
        

    <div>
      <h1 className="contact">Contact Us</h1>
    </div>
       <div className="conatct-form">
          <label>Your Name</label>
         <input type="text" id="name" />
         <label>Your E-mail</label>
         <input type="email" id="email" />
         <label>Your Address</label>
         <input type="text" id="address"/>
         <label>Your Country</label>
         <input type="text" id="country" />
         <button className="contact-btns">Book Slot</button>
       </div>

          <footer className="footers">
            <p>Terms of use</p>
            <p>Contact us</p>
          </footer>
      </>
  );
};

export default Home;