import React from 'react'
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';

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

class CardViewProduct extends React.Component {
    constructor(props) {
        super(props)

        let { match } = this.props
        let { id } = match.params

        this.state = {
            id: id,
            name: "",
            price: "",
            quantity: "",
            description: "",
            categoryName: "",
            images: null,
            buyQuantity:1
        }

    }

    componentDidMount() {
        this.loadProduct()
    }

    loadProduct = async () => {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        try {
            let response = await fetch("http://localhost:8080/api/product/" + this.state.id, requestOptions)
            let result = await response.json()
            console.log(result)
            this.setState({
                name: result.name,
                price: result.price,
                quantity: result.quantity,
                description: result.description,
                categoryId: result.categoryId,
                categoryName: result.categoryName,
                images: result.images

            })
            console.log(this.state)

        } catch (error) {
            console.log(error)
        }
    }

    setParam =(event)=>{
        this.setState({[event.target.name] : event.target.value})
    }

    addToCart = async() => {
        let cart = localStorage.getItem("cart")
        
        if(cart == null){
            
            localStorage.setItem("cart",
            JSON.stringify([
                {id:this.state.id,name:this.state.name,price:this.state.price,buyQuantity:this.state.buyQuantity,images:this.state.images}
            ])
            )
            this.props.history.push("/cart")
        }else{
            let cartParse = JSON.parse(localStorage.getItem("cart"))
            let i = 0
            let newCart = cartParse.map(item=>{
                if(item.id == this.state.id){
                    i++
                    return { id:item.id,name:this.state.name,price:this.state.price,buyQuantity: Number(item.buyQuantity) + Number(this.state.buyQuantity),images:this.state.images};
                }
                return item
            }

            )
            if(i == 0){
                newCart.push( {id:this.state.id,name:this.state.name,price:this.state.price,buyQuantity:this.state.buyQuantity,images:this.state.images})
            }
            localStorage.setItem("cart", JSON.stringify(newCart))
            this.props.history.push("/cart")

        }
    }

    up = () => {
        if (this.state.quantity > this.state.buyQuantity) {
            this.setState({ buyQuantity: this.state.buyQuantity + 1 })
            console.log(this.state.buyQuantity)
        }
    }

    down = (event) => {
        let value = this.state.buyQuantity
        if (value > 1) {
            this.setState({ buyQuantity: this.state.buyQuantity - 1 })
            console.log(this.state.buyQuantity)
        }
    }

    render() {
        return <div>
            <div className="product_image_area">
                <div className="container">
                    <div className="row s_product_inner">
                        <div className="col-lg-6">
                            <div >
                                <div className="single-prd-item">
                                    <img className="img-fluid" src={"http://localhost:8080/download?image=" + this.state.images} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="s_product_text">
                                <h3>{this.state.name}</h3>
                                <h2>${this.state.price}</h2>
                                <ul className="list">
                                    <li><a className="active" href="#"><span>Category </span>: {this.state.categoryName}</a></li>
                                    <li><a href="#"><span>Availibility</span> : In Stock</a></li>
                                </ul>
                                <p>{this.state.description}</p>
                                <div className="product_count">
                                    <label>Quantity:</label>
                                    <input type="text" value={this.state.buyQuantity} onChange={this.setParam} name="buyQuantity" id="sst" maxLength="12" title="Quantity:" className="input-text qty" />
                                    <button onClick={this.up}
                                        className="increase items-count" type="button"><i className="lnr lnr-chevron-up"></i></button>
                                    <button onClick={this.down}
                                        className="reduced items-count" type="button"><i className="lnr lnr-chevron-down"></i></button>
                                </div>
                                <div className="card_area d-flex align-items-center">
                                    <a className="primary-btn" onClick={this.addToCart}>Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </div>
    }

}

export default withRouter(CardViewProduct)