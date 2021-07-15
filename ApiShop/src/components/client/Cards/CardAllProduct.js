import React from 'react'
import { Link } from 'react-router-dom'

import '../css/main.css'
import '../css/linearicons.css'
import '../css/font-awesome.min.css'
import '../css/themify-icons.css'
import '../css/bootstrap.css'
import '../css/nice-select.css'
import '../css/nouislider.min.css'
import '../css/ion.rangeSlider.css'
import '../css/ion.rangeSlider.skinFlat.css'
import '../css/magnific-popup.css'

export default class CardAllProduct extends React.Component {

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
            hasMore: true,

            categories: []

        }
    }

    componentDidMount() {
        this.loadCategory()

        this.loadProduct()
    }

    setParam = (event) => {
        this.setState({
            request: { "start": 0, "length": 100, [event.target.name]: event.target.value }
        },this.loadProduct)
        console.log(this.state.request)
    }

    loadCategory = async () => {
        const search = { "start": 0, "length": 200, "search": { "value": "" } }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(search);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:8080/api/category/search", requestOptions)
            let result = await response.json()
            this.setState({ categories: result.data })
        } catch (error) {
            console.log('error', error)
        }
    }

    loadProduct = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(
            this.state.request
        );

        console.log(raw)

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:8080/api/product/search", requestOptions)
            if (response.ok) {
                let result = await response.json()
                this.setState({ response: result })
                console.log(this.state.response.data)
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
        return <div className="container">
            <div className="row">

                <div className="col-md-5">
                    <div className="sidebar-categories">
                        <div className="head">Browse Categories</div>
                        <ul className="main-categories" value={this.state.categoryId} >
                            {this.state.categories.map((category) => {
                                return <li className="main-nav-list"  name="categoryId" onClick={this.setParam} key={category.id} value={category.id}><a href="#">{category.name}</a></li>
                            })}
                        </ul>
                    </div>

                </div>

                <div className="col-md-7">

                    <div className="filter-bar d-flex flex-wrap align-items-center">
                        <div className="sorting">
                            <select>
                                <option value="1">Default sorting</option>
                                <option value="1">Default sorting</option>
                                <option value="1">Default sorting</option>
                            </select>
                        </div>
                        <div className="sorting mr-auto">
                            <select>
                                <option value="1">Show 12</option>
                                <option value="1">Show 12</option>
                                <option value="1">Show 12</option>
                            </select>
                        </div>
                        <div className="pagination">
                            <a href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></a>
                            <a href="#" className="active">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a>
                            <a href="#">6</a>
                            <a href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <br />
                    <br />

                    <div >
                        <div className="row">
                            {this.state.response.data.map(item => {
                                return <div key ={item.id} className="col-lg-4 col-md-6">
                                    <div className="single-product">
                                        <img className="img-fluid" src={"http://localhost:8080/download?image=" + item.images} />
                                        <div className="product-details">
                                            <h6>{item.name}</h6>
                                            <div className="price">
                                                <h6>$ {item.price}</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                            <div className="prd-bottom">
                                                <a onClick={() => { this.addToCart(item.id) }} className="social-info">
                                                    <span className="ti-bag"></span>
                                                    <p className="hover-text">add to bag</p>
                                                </a>
                                                <Link to={"/product/"+item.id }className="social-info">
                                                    <span className="lnr lnr-move"></span>
                                                    <p className="hover-text">view more</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })}

                        </div>
                    </div>

                    <div className="filter-bar d-flex flex-wrap align-items-center">
                        <div className="sorting mr-auto">
                            <select>
                                <option value="1">Show 12</option>
                                <option value="1">Show 12</option>
                                <option value="1">Show 12</option>
                            </select>
                        </div>
                        <div className="pagination">
                            <a href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></a>
                            <a href="#" className="active">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a>
                            <a href="#">6</a>
                            <a href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    }



}