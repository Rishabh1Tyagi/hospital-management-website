import React from 'react';

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


import './Service.css';

const Service = () => {
  return (
      <>
                  <div>
           <h1 className="services">Our Services</h1>
           <p className="para-details">We Are Provide both Services Online or Offline for Contact to a Doctor.</p>
         </div>


         <div className="container">
        <div className="card">
  <img src={teamone} alt="Denim Jeans"/>
  <h1>Dr. Shalini (M.B.B.S)</h1>
  <p className="price">Price:500 Rupees</p>
  <p className="heart">Domain:Cardiology (Heart Care)</p>
  <p className="email">Contact to email:shalini12@gmail.com</p>
  <p>OR</p>
  <p>Contact to Phone Number: 9999915168</p>
  <p><button>Contact</button></p>
</div>
<div className="card">
  <img src={teamtwo} alt="Denim Jeans"/>
  <h1>Dr.Maxmillian (M.B.B.S)</h1>
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
  <h1>Dr. JohnDoe (M.B.B.S)</h1>
  <p className="price">Price:500 Rupees</p>
  <p className="heart">Domain:Neurology.</p>
  <p className="email">Contact to email:johndoe162@gmail.com</p>
  <p>OR</p>
  <p>Contact to Phone Number: 8470011099</p>
  <p><button>Contact</button></p>
</div>
<div className="card">
  <img src={teamthree} alt="Denim Jeans"/>
  <h1>Dr.Evelyn (M.B.B.S)</h1>
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
            <img className="labs-image"  src={labfour} alt=""/>
            <img className="labs-image" src={labfive} alt=""/>
          </div>

      <div className="container-small">
        <img className="doctors-image" src={doctors} alt="doctors" />
        <h1 className="bottom-centered">Find A Doctor Today And Book Your Appointment Now</h1>
        <button className="bottom-centered-btns">Book Online</button>
      </div>
             
      </>
  );
};

export default Service;