import React, {Component} from 'react';
import Store from '../Components/Store';
import Scroll from '../Components/Scroll';
import LoginPage from '../Components/LoginPage';
import '../Components/Store.css';

class CalibrationApp extends Component{

        render(){

    return(

        <div>
        <h1 className='tc'>NRL TRUCK TANK CALIBRATION CHARTS</h1>
        <Store/>
        <Scroll>
        <LoginPage/>
        </Scroll>

        </div>

    )
 }
}

export default CalibrationApp;