import React from 'react';
import '../Components/LoginPage.css';


const LoginPage = ({giveStatus}) => {

    return(
        <div>
        <div className="Container">
        <form action="https://retailcalibration.com/index.php" >
        <label htmlFor = 'Staff ID'>Staff ID</label>
        <input className= 'pa1 dib ma3 br3' type="text" id="Staff" placeholder="Enter Staff ID" name="Staff ID" required onInput={giveStatus}></input>
        <br></br>
        <label htmlFor= 'Password'>Password </label>
        <input className= 'pa1 dib ma0 br3' type="password" id="Password" placeholder="Enter Password" name="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required onInput={giveStatus}></input>
        <br></br> 
        <button className='button' type="submit" value= "Submit">Submit</button>
        </form> 
        </div>
        <div id="message">
        <h3>Password must contain the following:</h3>
        <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
        <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
        <p id="number" className="invalid">A <b>number</b></p>
        <p id="length" className="invalid">Minimum <b>8 characters</b></p>
        </div>
        </div>
    );

}

export default LoginPage;