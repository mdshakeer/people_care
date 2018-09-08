import React, { Component } from 'react';
import banner from './images/banner.jpg';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
      	<div className="Overlay-top">
	        <img src={banner}/>
	    </div>
	    <div className="Landing-content">
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
	        		<a href="tel:1234567890" className="ph"><i className="fa fa-phone"></i> 1234567890</a>
	        		<a href="https://wa.me/1234567890" className="wa"><i className="fa fa-whatsapp"></i> 1234567890</a>
	        	</div>
	        </div>
	    </div>
      </div>
    );
  }
}

export default Landing;
