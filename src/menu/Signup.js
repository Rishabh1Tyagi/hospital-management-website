import useInput from '../hooks/use-input';
import './Signup.css';

 const Signup = (props) => {
   const {
       value: enteredName,
       isValid: enteredNameIsValid,
       hasError: nameInputHasError,
       valueChangeHandler: nameChangeHandler,
       inputBlurHandler: nameBlurHandler,
       reset: resetNameInput
   } = useInput(value => value.trim() !== '');

   const {
       value: enteredEmail,
       isValid: enteredEmailIsValid,
       hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput
   } = useInput(value => value.includes('@'));
   
//postal code
    const {
        value: enteredPostalCode,
        isValid: enteredPostalCodeIsValid,
        hasError: postalcodeInputHasError,
        valueChangeHandler: postalcodeChangeHandler,
        inputBlurHandler: postalcodeBlurHandler,
        reset: resetPostalCodeInput
    } = useInput(value => value.trim() !== '');

//password
   const {
      value: enteredPassword,
     isValid: enteredPasswordCodeIsValid,
     hasError: passwordInputHasError,
     valueChangeHandler: passwordChangeHandler,
     inputBlurHandler: passwordBlurHandler,
     reset: resetPasswordInput
   } = useInput(value => value.trim() !== '');

//re-password
   const {
    value: enteredRePassword,
    isValid: enteredRePasswordCodeIsValid,
    hasError: RepasswordInputHasError,
    valueChangeHandler: RepasswordChangeHandler,
    inputBlurHandler: RepasswordBlurHandler,
    reset: resetRePasswordInput
   } = useInput(value => value.trim() !== '');

        let formIsValid = false;
        if(enteredNameIsValid && enteredEmailIsValid && enteredPostalCodeIsValid && enteredPasswordCodeIsValid && enteredRePasswordCodeIsValid) {
            formIsValid = true;
        } 


       const formSubmissionHandler = (event) => {
       event.preventDefault();
      
     
     resetNameInput();
     resetEmailInput();  
     resetPostalCodeInput();
     resetPasswordInput();
     resetRePasswordInput(); 
};

 const nameInputClasses = nameInputHasError 
 ? 'form-control' : 
 'form-control invalid';

  const emailInputClasses = emailInputHasError 
   ? 'from-control invalid' : 
  'form-control';

  const postalcodeInputClasses = postalcodeInputHasError
  ? 'form-control' : 
  'form-control invalid';
  
  const passwordInputClasses = passwordInputHasError
  ? 'form-control' : 
  'form-control';

  const repasswordInputClasses = RepasswordInputHasError
  ? 'form-control' :
    'form-control';

    return (
        <>
         <form onSubmit={formSubmissionHandler}>
             <section className="all-forms"> 
             <div className={nameInputClasses}>
                 <label htmlFor="name">Your Name</label>
                 <input 
                 type="text" 
                 id="name" 
                 onChange={nameChangeHandler}
                 onBlur={nameBlurHandler} 
                 value={enteredName}                 
                 />
                {nameInputHasError && (
                 <p className="error-text">Name must not be empty.</p> 
                 )}
             </div>
             </section>

              <div className={postalcodeInputClasses}>
                 <label htmlFor="name">Your Postal Code</label>
                 <input 
                 type="number" 
                 id="name"  
                  onChange={postalcodeChangeHandler}
                  onBlur={postalcodeBlurHandler}
                  value={enteredPostalCode}   
                 />
                 {postalcodeInputHasError && (
                     <p className="error-text">Postal code must not be empty.(5 characters long)</p>
                 )}
             </div>
               
               <section className="all-email">
              <div  className={emailInputClasses}>
                 <label htmlFor="name">Your Email</label>
                 <input 
                 type="email" 
                 id="name"  
                 onChange={emailChangeHandler}
                 onBlur={emailBlurHandler}
                 value={enteredEmail}    
                 />
                 {emailInputHasError && (
                      <p className="error-text">Email should not be empty.!</p>
                 )}
             </div> 
             </section>

              <div className={passwordInputClasses}>
                 <label htmlFor="name">Password</label>
                 <input 
                 type="password" 
                 id="password"  
                 onChange={passwordChangeHandler}
                 onBlur={passwordBlurHandler}
                 value={enteredPassword}    
                 />
                 {passwordInputHasError && (
                     <p className="error-text">Password must not be empty!</p>
                 )}
             </div>
             
             <div className={repasswordInputClasses}>
                 <label htmlFor="name">Re-Password</label>
                 <input 
                 type="password" 
                 id="repassword"  
                  onChange={RepasswordChangeHandler}
                  onBlur={RepasswordBlurHandler}
                  value={enteredRePassword}   
                 />
                 {RepasswordInputHasError && (
                   <p className="error-text">Re-Password must not be empty!</p>
                 )}
             </div>
              

             <div className="btns">
                 <button disabled={!formIsValid}>Submit</button>
             </div>
         </form>
        </>
    );
};


export default Signup;