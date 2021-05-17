import React from 'react'
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

export default class Exclusive extends React.Component{
    render(){
        return<div> <section className="exclusive-deal-area">
		<div className="container-fluid">
			<div className="row justify-content-center align-items-center">
				<div className="col-lg-6 no-padding exclusive-left">
					<div className="row clock_sec clockdiv" id="clockdiv">
						<div className="col-lg-12">
							<h1>Exclusive Hot Deal Ends Soon!</h1>
							<p>Who are in extremely love with eco friendly system.</p>
						</div>
						<div className="col-lg-12">
							<div className="row clock-wrap">
								<div className="col clockinner1 clockinner">
									<h1 className="days">150</h1>
									<span className="smalltext">Days</span>
								</div>
							</div>
						</div>
					</div>
					<a href="" className="primary-btn">Shop Now</a>
				</div>
				<div className="col-lg-6 no-padding exclusive-right">
					<div className="active-exclusive-product-slider">
					
						<div className="single-exclusive-slider">
							<img className="img-fluid" src={require("../img/product/converse.jpg").default} alt=""/>
							<div className="product-details">
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<h4>addidas New Hammer sole
									for Sports person</h4>
								<div className="add-bag d-flex align-items-center justify-content-center">
									<a className="add-btn" href=""><span className="ti-bag"></span></a>
									<span className="add-text text-uppercase">Add to Bag</span>
								</div>
							</div>
						</div>
						
						<div className="single-exclusive-slider">
							<img className="img-fluid" src={require("../img/product/converse2.png").default} alt=""/>
							<div className="product-details">
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<h4>addidas New Hammer sole
									for Sports person</h4>
								<div className="add-bag d-flex align-items-center justify-content-center">
									<a className="add-btn" href=""><span className="ti-bag"></span></a>
									<span className="add-text text-uppercase">Add to Bag</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<br/>
	<br/>
	</div>
    }
}