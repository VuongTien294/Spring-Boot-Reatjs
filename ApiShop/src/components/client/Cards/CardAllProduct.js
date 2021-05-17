import React from 'react'
// import { Link } from 'react-router-dom'

// import '../css/main.css'
// import '../css/linearicons.css'
// import '../css/font-awesome.min.css'
// import '../css/themify-icons.css'
// import '../css/bootstrap.css'
// import '../css/nice-select.css'
// import '../css/nouislider.min.css'
// import '../css/ion.rangeSlider.css'
// import '../css/ion.rangeSlider.skinFlat.css'
// import '../css/magnific-popup.css'

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
            hasMore: true

        }
    }

    componentDidMount() {
        // this.loadProduct()
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

    render() {
        return<div>
           <p> aaaaa</p>
        </div>
    }
    // render() {
    //     return <div className="container">
    //         <div className="row">

    //             <div className="col-md-5">
    //                 <div className="sidebar-categories">
    //                     <div className="head">Browse Categories</div>
    //                     <ul className="main-categories" >
    //                         <li className="main-nav-list"><a href="#">Pest Control</a></li>
    //                         <li className="main-nav-list"><a href="#">Pet Care</a></li>
    //                     </ul>
    //                 </div>

    //             </div>

    //             <div className="col-md-7">

    //                 <div className="filter-bar d-flex flex-wrap align-items-center">
    //                     <div className="sorting">
    //                         <select>
    //                             <option value="1">Default sorting</option>
    //                             <option value="1">Default sorting</option>
    //                             <option value="1">Default sorting</option>
    //                         </select>
    //                     </div>
    //                     <div className="sorting mr-auto">
    //                         <select>
    //                             <option value="1">Show 12</option>
    //                             <option value="1">Show 12</option>
    //                             <option value="1">Show 12</option>
    //                         </select>
    //                     </div>
    //                     <div className="pagination">
    //                         <a href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></a>
    //                         <a href="#" className="active">1</a>
    //                         <a href="#">2</a>
    //                         <a href="#">3</a>
    //                         <a href="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></a>
    //                         <a href="#">6</a>
    //                         <a href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    //                     </div>
    //                 </div>


    //                 <div >
    //                     <div className="row">
    //                         {this.state.response.data.map(item => {
    //                             return <div className="col-lg-4 col-md-6">
    //                                 <div className="single-product">
    //                                     {/* <img className="img-fluid" src={"http://localhost:8080/download?image=" + item.images} /> */}
    //                                     <div className="product-details">
    //                                         <h6>{item.name}</h6>
    //                                         <div className="price">
    //                                             <h6>$ {item.price}</h6>
    //                                             {/* <h6 classNameName="l-through">$210.00</h6> */}
    //                                         </div>
    //                                         <div className="prd-bottom">
    //                                             <a href="" className="social-info">
    //                                                 <span className="ti-bag"></span>
    //                                                 <p className="hover-text">add to bag</p>
    //                                             </a>
    //                                             <a href="" className="social-info">
    //                                                 <span className="lnr lnr-move"></span>
    //                                                 <p className="hover-text">view more</p>
    //                                             </a>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         })}

    //                     </div>
    //                 </div>

    //                 {/* <div classNameName="filter-bar d-flex flex-wrap align-items-center">
    //                         <div classNameName="sorting mr-auto">
    //                             <select>
    //                                 <option value="1">Show 12</option>
    //                                 <option value="1">Show 12</option>
    //                                 <option value="1">Show 12</option>
    //                             </select>
    //                         </div>
    //                         <div classNameName="pagination">
    //                             <a href="#" classNameName="prev-arrow"><i classNameName="fa fa-long-arrow-left" aria-hidden="true"></i></a>
    //                             <a href="#" classNameName="active">1</a>
    //                             <a href="#">2</a>
    //                             <a href="#">3</a>
    //                             <a href="#" classNameName="dot-dot"><i classNameName="fa fa-ellipsis-h" aria-hidden="true"></i></a>
    //                             <a href="#">6</a>
    //                             <a href="#" classNameName="next-arrow"><i classNameName="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    //                         </div>
    //                     </div> */}

    //             </div>
    //         </div>
    //     </div>


    // }



}