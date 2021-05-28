import React from 'react';

import search from '../images/search-logo.jpg';
import searchone from '../images/searchone.jpg';
import searchthree from '../images/searchthree.jpg';
import teamlogo from '../images/team.jpg';
import teamone from '../images/team1.jpg';
import teamtwo from '../images/team2.jpg';
import teamthree from '../images/team3.jpg';




const About = () => {
  return (
     <>
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
     </>  
    
    );
};

export default About;