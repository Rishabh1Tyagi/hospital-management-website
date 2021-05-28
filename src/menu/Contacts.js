import React from 'react';

const Contact = () => {
  return (
      <>
        <div>
      <h1 className="contact">Contact Us</h1>
    </div>
       <div className="conatct-form">
          <label>Your Name</label>
         <input type="text" id="name"     />
         <label>Your E-mail</label>
         <input type="email" id="email"    />
         <label>Your Address</label>
         <input type="text" id="address"   />
         <label>Your Questions</label>
         <input type="text" id="question"  />
         <label>Your Country</label>
         <input type="text" id="country"   />
         <button className="contact-btns">Book Slot</button>
       </div>

    
      </>
  );
};

export default Contact;