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

export default class BrandArea extends React.Component{
    render(){
        return	<section className="brand-area section_gap">
		<div className="container">
			<div className="row">
				<a className="col single-img" href="#">
					<img className="img-fluid d-block mx-auto" src={require("../img/brand/1.png").default} alt=""/>
				</a>
				<a className="col single-img" href="#">
					<img className="img-fluid d-block mx-auto" src={require("../img/brand/2.png").default} alt=""/>
				</a>
				<a className="col single-img" href="#">
					<img className="img-fluid d-block mx-auto" src={require("../img/brand/3.png").default} alt=""/>
				</a>
				<a className="col single-img" href="#">
					<img className="img-fluid d-block mx-auto" src={require("../img/brand/4.png").default} alt=""/>
				</a>
				<a className="col single-img" href="#">
					<img className="img-fluid d-block mx-auto" src={require("../img/brand/5.png").default} alt=""/>
				</a>
			</div>
		</div>
	</section>
	
    }
}