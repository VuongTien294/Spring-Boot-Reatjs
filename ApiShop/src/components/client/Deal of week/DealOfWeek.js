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

export default class DealOfWeek extends React.Component{
    render(){
        return	<section className="related-product-area section_gap_bottom">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6 text-center">
					<div className="section-title">
						<h1>Deals of the Week</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-9">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<a href="#"><img src={require("../img/r1.jpg").default} alt=""/></a>
								<div className="desc">
									<a href="#" className="title">Black Clogs</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<a href="#"><img src={require("../img/r2.jpg").default} alt=""/></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<a href="#"><img src={require("../img/r3.jpg").default} alt=""/></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<a href="#"><img src={require("../img/r5.jpg").default} alt=""/></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<a href="#"><img src={require("../img/r6.jpg").default} alt=""/></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<a href="#"><img src={require("../img/r7.jpg").default} alt=""/></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-related-product d-flex">
								<a href="#"><img src={require("../img/r9.jpg").default} alt=""/></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-related-product d-flex">
								<a href="#"><img src={require("../img/r10.jpg").default} alt=""/></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-related-product d-flex">
								<a href="#"><img src={require("../img/r11.jpg").default} alt=""/></a>
								<div className="desc">
									<a href="#" className="title">Black lace Heels</a>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3">
					<div className="ctg-right">
						<a href="#" target="_blank">
							<img className="img-fluid d-block mx-auto" src={require("../img/category/c5.jpg").default} alt=""/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	
    }
}