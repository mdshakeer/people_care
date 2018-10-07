import React, { Component } from 'react';
import banner from './images/banner.jpg';
import u_c from './images/u_c.png';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
      	<div className="Overlay-top">
	        <img src={u_c}/>
	    </div>
	    <div className="Landing-content hidden">
	        <header className="App-header">
	        </header>
	        <div className="col-lg-12 col-md-12 col-xs-12 Raleway text-center">
	        	<div className="h1">
	        		SAR CAR DETAILING
	        	</div>
	        	<p className="themeText">Perfect paint care for your car, Expert in car and bike detailing</p>
	        	<div className="centerLine"></div>
	        	<div className="Roboto">
	        		<div className="h5 serviceNames">
	        			<div>Teflon coating</div> <span className="dot dot-xs"></span>
	        			<div>Ceramic coating</div> <span className="dot"></span>
	        			<div>F11 interior cleaning</div> <span className="dot-xs"></span>
	        			<div>Door Step Service</div> <span className="dot"></span>
	        			<div>Glass cleaning</div> <span className="dot dot-xs"></span>
	        			<div>Waxing</div>
	        		</div>
	        	</div>
	        	<div className="Linkable h5 Roboto">
	        		<a href="tel:84323223232" className="ph"><i className="fa fa-phone"></i> 84323223232</a>
	        		<a href="https://wa.me/9843484531" className="wa"><i className="fa fa-whatsapp"></i> 9843484531</a>
	        	</div>
	        </div>
	    </div>
      </div>
    );
  }
}

export default Landing;
