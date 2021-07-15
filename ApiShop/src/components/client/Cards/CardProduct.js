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
import { Link } from 'react-router-dom'


export default class CardProduct extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			response: {//Response : Tra ve
				"recordsTotal": 0, //Tong so ban ghi co trong server
				"recordsFiltered": 0,//Tong so ban ghi tim duoc
				"data": [ // mang doi tuong chua doi tuong danh muc duoc tim thay
				]
			},
			request: { "start": 0, "length": 100, "categoryId": "" },
			hasMore: true

		}
	}

	componentDidMount() {
		this.loadProduct()
	}

	loadProduct = async () => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify(
			this.state.request
		);

		var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		try {
			let response = await fetch("http://localhost:8080/api/product/search", requestOptions)
			let result = await response.json()
			if (response.ok) {
				this.setState({ response: result })
			}
		} catch (error) {
			console.log(error)

		}
	}

	addToCart = async (id) => {
		
		var requestOptions = {
			method: 'GET',
			redirect: 'follow'
		};

		try {
			let response = await fetch("http://localhost:8080/api/product/" + id, requestOptions)
			if (response.ok) {
				let result = await response.json()

				let cart = localStorage.getItem("cart")
				if (cart == null) {
					
					localStorage.setItem("cart",
						JSON.stringify([
							{ id: id, name: result.name, price: result.price, buyQuantity: 1, images: result.images }
						])
					)

				} else {
					let cartParse = JSON.parse(localStorage.getItem("cart"))
					let i = 0
					let newCart = cartParse.map(item => {
						if (item.id == id) {
							i++
							return { id: item.id, name: result.name, price: result.price, buyQuantity: Number(item.buyQuantity) + 1, images: result.images };
						}
						return item
					}

					)
					if (i == 0) {
						newCart.push({ id: id, name: result.name, price: result.price, buyQuantity: 1, images: result.images })
					}
					localStorage.setItem("cart", JSON.stringify(newCart));
				}


			}

		} catch (error) {
			console.log(error)
		}

	}

	render() {
		return <section>
			<div className="single-product-slider">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6 text-center">
							<h2>Best Seller Of This Month</h2>
						</div>
					</div>
					<br />
					<div className="row">
						{this.state.response.data.map(item => {
							return <div key={item.id} className="col-lg-3 col-md-6">
								<div className="single-product">
									<img className="img-fluid" src={"http://localhost:8080/download?image=" + item.images} alt="" />
									<div className="product-details">
										<h6>{item.name}</h6>
										<div className="price">
											<h6>$ {item.price}</h6>
											<h6 style={{ color: "orange" }}>In Stock</h6>
										</div>
										<div className="prd-bottom" >

											<a onClick={() => { this.addToCart(item.id) }} className="social-info">
												<span className="ti-bag"></span>
												<p className="hover-text">add to bag</p>
											</a>
											<Link className="social-info" to={"/product/" + item.id}>

												<span className="lnr lnr-move"></span>
												<p className="hover-text">view more</p>

											</Link>

										</div>
									</div>
								</div>
							</div>
						}
						)
						}

					</div>
				</div>
			</div>
		</section>
	}
}