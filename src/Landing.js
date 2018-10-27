import React, { Component } from 'react';
import s1 from './images/1.jpg';
import s2 from './images/2.jpg';
import s3 from './images/3.jpg';
import s4 from './images/4.jpg';
import s5 from './images/5.jpg';
import s6 from './images/6.jpg';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
      	<div className="Overlay-top hidden">
      		
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
	    <header id="mu-header">  
		    <nav className="navbar navbar-default mu-main-navbar" role="navigation">  
		      <div className="container">
		        <div className="navbar-header">
		          {/* LOGO        */}

		           {/*  Text based logo  */}
		          <a className="navbar-brand h4" href="index.html">SBN CAR POLISHING</a> 

				      {/*  Image based logo  */}
		          {/* <a className="navbar-brand" href="index.html"><img src="assets/img/logo.png" alt="Logo img"></a>  */}
		        </div>
		        <div id="navbar" className="navbar-collapse collapse">
		          <ul id="top-menu" className="nav navbar-nav navbar-right mu-main-nav">
		            <li><a href="#">HOME</a></li>
		            <li className=""><a href="#mu-about-us">ABOUT US</a></li>                       
		            <li className=""><a href="#mu-restaurant-menu">OUR SERVICES</a></li>
		            <li className=""><a href="#mu-contact">CONTACT</a></li> 
		          </ul>                            
		        </div>{/* .nav-collapse        */}
		      </div>          
		    </nav> 
		  </header>
		  <section id="mu-slider">
		    <div className="mu-slider-area"> 

		      {/* Top slider */}
		      <div className="mu-top-slider">

		        {/* Top slider single slide */}
		        <div className="mu-top-slider-single">
		          <img src={s1} alt="img"/>
		          {/* Top slider content */}
		          <div className="mu-top-slider-content">
		            <span className="mu-slider-small-title">Teflon coating</span>
		            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatem accusamus non quidem, deleniti optio.</p>           
		            <a href="#mu-reservation" className="mu-readmore-btn mu-reservation-btn hidden">BOOK A TABLE</a>
		          </div>
		          {/* Top slider content */}
		        </div>
		        {/* Top slider single slide     */}

		         {/* Top slider single slide */}
		        <div className="mu-top-slider-single">
		          <img src={s2} alt="img"/>
		          {/* Top slider content */}
		          <div className="mu-top-slider-content">
		            <span className="mu-slider-small-title">Ceramic coating</span>
		            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatem accusamus non quidem, deleniti optio.</p>           
		           <a href="#mu-reservation" className="mu-readmore-btn mu-reservation-btn hidden">BOOK A TABLE</a>
		          </div>
		          {/* Top slider content */}
		        </div>
		        {/* Top slider single slide  */}

		        {/* Top slider single slide */}
		        <div className="mu-top-slider-single">
		          <img src={s3} alt="img"/>
		          {/* Top slider content */}
		          <div className="mu-top-slider-content">
		            <span className="mu-slider-small-title">F11 interior cleaning</span>
		            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatem accusamus non quidem, deleniti optio.</p>           
		            <a href="#mu-reservation" className="mu-readmore-btn mu-reservation-btn hidden">BOOK A TABLE</a>
		          </div>
		          {/* Top slider content */}
		        </div>
		        {/* Top slider single slide */}

		        {/* Top slider single slide */}
		        <div className="mu-top-slider-single">
		          <img src={s4} alt="img"/>
		          {/* Top slider content */}
		          <div className="mu-top-slider-content">
		            <span className="mu-slider-small-title">Door Step Service</span>
		            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatem accusamus non quidem, deleniti optio.</p>           
		            <a href="#mu-reservation" className="mu-readmore-btn mu-reservation-btn hidden">BOOK A TABLE</a>
		          </div>
		          {/* Top slider content */}
		        </div>
		        {/* Top slider single slide     */}

		         {/* Top slider single slide */}
		        <div className="mu-top-slider-single">
		          <img src={s5} alt="img"/>
		          {/* Top slider content */}
		          <div className="mu-top-slider-content">
		            <span className="mu-slider-small-title">Glass cleaning</span>
		            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatem accusamus non quidem, deleniti optio.</p>           
		           <a href="#mu-reservation" className="mu-readmore-btn mu-reservation-btn hidden">BOOK A TABLE</a>
		          </div>
		          {/* Top slider content */}
		        </div>
		        {/* Top slider single slide  */}

		        {/* Top slider single slide */}
		        <div className="mu-top-slider-single">
		          <img src={s6} alt="img"/>
		          {/* Top slider content */}
		          <div className="mu-top-slider-content">
		            <span className="mu-slider-small-title">Waxing</span>
		            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque voluptatem accusamus non quidem, deleniti optio.</p>           
		            <a href="#mu-reservation" className="mu-readmore-btn mu-reservation-btn hidden">BOOK A TABLE</a>
		          </div>
		          {/* Top slider content */}
		        </div>
		        {/* Top slider single slide    */}

		      </div>
		    </div>
		  </section>
		  {/* End slider  */}

		  <section id="mu-about-us">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-12">
		          <div className="mu-about-us-area">

		            <div className="mu-title">
		              <span className="mu-subtitle">Discover</span>
		              <h2>ABOUT US</h2>
		            </div>

		            <div className="row">
		              <div className="col-md-12">
		               <div className="mu-about-us-left">     
		               	{/* https://youtu.be/f0SrJSUR-fo */}
		                <iframe width="1024" height="525" src="https://www.youtube.com/embed/1hM_Ihy70pU"></iframe>          
		                </div>
		              </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		  </section>

		  <section id="mu-contact">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-12">
		          <div className="mu-contact-area">

		            <div className="mu-title">
		              <span className="mu-subtitle">Get In Touch</span>
		              <h2>Contact Us</h2>
		            </div>

		            <div className="mu-contact-content">
		              <div className="row">

		                <div className="col-md-6 hidden">
		                  <div className="mu-contact-left">
		                    {/* Email message div */}
		                    <div id="form-messages"></div>
		                    {/* Start contact form */}
		                    <form id="ajax-contact" method="post" action="mailer.php" className="mu-contact-form">
		                      <div className="form-group">
		                        <label for="name">Your Name</label>
		                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" required=""/>
		                      </div>
		                      <div className="form-group">
		                        <label for="email">Email address</label>
		                        <input type="email" className="form-control" id="email" name="email" placeholder="Email" required=""/>
		                      </div>                      
		                      <div className="form-group">
		                        <label for="subject">Subject</label>
		                        <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" required=""/>
		                      </div>
		                      <div className="form-group">
		                        <label for="message">Message</label>                        
		                        <textarea className="form-control" id="message" name="message" cols="30" rows="10" placeholder="Type Your Message" required=""></textarea>
		                      </div>                      
		                      <button type="submit" className="mu-send-btn">Send Message</button>
		                    </form>
		                  </div>
		                </div>

		                <div className="col-md-6">
		                  <div className="mu-contact-right">
		                    <div className="mu-contact-widget">
		                      <h3>Office Address</h3>
		                      <p>No 2, Saibaba Kovil, Near to CTC bus Stop, Mettupalayam Road, Opposite to Womens Center Coimbatore, Tamil Nadu 641043, India</p>
		                      <address>
		                        <p><a href="tel:84323223232" className="ph"><i className="fa fa-phone"></i> 84323223232</a></p>
		                        <p><a href="https://wa.me/9843484531" className="wa"><i className="fa fa-whatsapp"></i> 9843484531</a></p>
		                        <p><i className="fa fa-envelope-o"></i></p>
		                        <p><i className="fa fa-map-marker"></i></p>
		                      </address>
		                    </div>
		                    <div className="mu-contact-widget">
		                      <h3>Open Hours</h3>                      
		                      <address>
		                        <p><span>Monday - Sunday</span> 7:30 am to 10:30 pm</p>
		                      </address>
		                    </div>
		                  </div>
		                </div>

		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </section>


		  <section id="mu-map">
		    <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d125314.16239371391!2d76.88010543878718!3d11.033556958273836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba8594c9417ee03%3A0x88fa7ceae35a6414!2sSBN+CAR+POLISH+Teflon+Coating+Car+%7C+Ceramic+Coating+%7C+Car+Interior+Cleaning+%7C+Car+polish+coimbatore!3m2!1d11.033565!2d76.95014599999999!5e0!3m2!1sen!2sin!4v1540678665169" width="100%" height="100%" frameborder="0" allowfullscreen="" style="pointer-events: none;"></iframe>
		  </section>
      </div>
    );
  }
}

export default Landing;
