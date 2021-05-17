import React from 'react'
import '../css/main.css'
import '../css/main.css'
import '../css/linearicons.css'
import '../css/font-awesome.min.css'
import '../css/themify-icons.css'
import '../css/bootstrap.css'
import '../css/owl.carousel.css'
import '../css/nice-select.css'
import '../css/nouislider.min.css'
import '../css/ion.rangeSlider.css'
import '../css/ion.rangeSlider.skinFlat.css'
import '../css/magnific-popup.css'

export default class Footer extends React.Component{
    render(){
        return	<footer className="footer-area section_gap">
		<div className="container">
			<div className="row">
				<div className="col-lg-3  col-md-6 col-sm-6">
					<div className="single-footer-widget">
						<h6>About Us</h6>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
							magna aliqua.
						</p>
					</div>
				</div>
				<div className="col-lg-4  col-md-6 col-sm-6">
					<div className="single-footer-widget">
						<h6>Newsletter</h6>
						<p>Stay update with our latest</p>
					</div>
				</div>
				<div className="col-lg-3  col-md-6 col-sm-6">
					<div className="single-footer-widget mail-chimp">
						<h6 className="mb-20">Instragram Feed</h6>
						<ul className="instafeed d-flex flex-wrap">
							<li><img src={require("../img/i1.jpg").default} alt=""/></li>
							<li><img src={require("../img/i2.jpg").default} alt=""/></li>
							<li><img src={require("../img/i3.jpg").default} alt=""/></li>
							<li><img src={require("../img/i4.jpg").default} alt=""/></li>
							<li><img src={require("../img/i5.jpg").default} alt=""/></li>
							<li><img src={require("../img/i6.jpg").default} alt=""/></li>
							<li><img src={require("../img/i7.jpg").default} alt=""/></li>
							<li><img src={require("../img/i8.jpg").default} alt=""/></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-2 col-md-6 col-sm-6">
					<div className="single-footer-widget">
						<h6>Follow Us</h6>
						<p>Let us be social</p>
						<div className="footer-social d-flex align-items-center">
							<a href="#"><i className="fa fa-facebook"></i></a>
							<a href="#"><i className="fa fa-twitter"></i></a>
							<a href="#"><i className="fa fa-dribbble"></i></a>
							<a href="#"><i className="fa fa-behance"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
				<p className="footer-text m-0">
</p>
			</div>
		</div>
	</footer>
	
    }
}