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


export default class Feature extends React.Component{
    render(){
        return <div>
		<section className="features-area section_gap">
		<div className="container">
			<div className="row features-inner">
			
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="single-features">
						<div className="f-icon">
							<img src={require("../img/features/f-icon1.png").default} alt="" style={{margin :"auto"}}/>
						</div>
						<h6>Free Delivery</h6>
						<p>Free Shipping on all order</p>
					</div>
				</div>
			
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="single-features">
						<div className="f-icon">
							<img src={require("../img/features/f-icon2.png").default} alt="" style={{margin :"auto"}}/>
						</div>
						<h6>Return Policy</h6>
						<p>Free Shipping on all order</p>
					</div>
				</div>
				
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="single-features">
						<div className="f-icon">
							<img src={require("../img/features/f-icon3.png").default} alt="" style={{margin :"auto"}}/>
						</div>
						<h6>24/7 Support</h6>
						<p>Free Shipping on all order</p>
					</div>
				</div>
				 
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="single-features">
						<div className="f-icon">
							<img src={require("../img/features/f-icon4.png").default} alt="" style={{margin :"auto"}}/>
						</div>
						<h6>Secure Payment</h6>
						<p>Free Shipping on all order</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="category-area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 col-md-12">
					<div className="row">
						<div className="col-lg-8 col-md-8">
							<div className="single-deal">
								<div className="overlay"></div>
								<img className="img-fluid w-100" src={require("../img/category/c1.jpg").default} alt=""/>
								<a href="img/category/c1.jpg" className="img-pop-up" target="_blank">
									<div className="deal-details">
										<h6 className="deal-title">Sneaker for Sports</h6>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-4">
							<div className="single-deal">
								<div className="overlay"></div>
								<img className="img-fluid w-100" src={require("../img/category/c2.jpg").default} alt=""/>
								<a href="img/category/c2.jpg" className="img-pop-up" target="_blank">
									<div className="deal-details">
										<h6 className="deal-title">Sneaker for Sports</h6>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-4 col-md-4">
							<div className="single-deal">
								<div className="overlay"></div>
								<img className="img-fluid w-100" src={require("../img/category/c3.jpg").default} alt=""/>
								<a href="img/category/c3.jpg" className="img-pop-up" target="_blank">
									<div className="deal-details">
										<h6 className="deal-title">Product for Couple</h6>
									</div>
								</a>
							</div>
						</div>
						<div className="col-lg-8 col-md-8">
							<div className="single-deal">
								<div className="overlay"></div>
								<img className="img-fluid w-100" src={require("../img/category/c4.jpg").default} alt=""/>
								<a href="img/category/c4.jpg" className="img-pop-up" target="_blank">
									<div className="deal-details">
										<h6 className="deal-title">Sneaker for Sports</h6>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single-deal">
						<div className="overlay"></div>
						<img className="img-fluid w-100" src={require("../img/category/c5.jpg").default} alt=""/>
						<a href="img/category/c5.jpg" className="img-pop-up" target="_blank">
							<div className="deal-details">
								<h6 className="deal-title">Sneaker for Sports</h6>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	</div>
    }
}