
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
import { Route , withRouter} from 'react-router-dom';

 class Header extends React.Component {

    logout =()=>{
        if(localStorage.getItem("accessToken")!= null){
            localStorage.removeItem("user")
            localStorage.removeItem("accessToken")
            localStorage.removeItem("billId")
            alert("Dang Xuat Thanh Cong!")
            this.props.history.push("/")
        }else{
            alert("Ban chua dang nhap!")
            this.props.history.replace("/login")

        }

    }
    render() {
        return <>
            <header className="header_area sticky-header">
                <div className="main_menu">
                    <nav className="navbar navbar-expand-lg navbar-light main_box">
                        <div className="container">

                            {/* <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""/></a> */}
                            <Link className="navbar-brand logo_h" to="/"><img src={require("../img/logo.png").default} alt="" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                <ul className="nav navbar-nav menu_nav ml-auto">
                                    <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
                                    <li className="nav-item active"><Link className="nav-link" to="/product/search">Shop</Link></li>
                                    <li className="nav-item active"><Link className="nav-link" to="/contact">Contact</Link></li>
                                    <li className="nav-item active"><Link className="nav-link" to="/blog">Blog</Link></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="nav-item"><Link to="/cart" className="cart"><span className="ti-bag"></span></Link></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="nav-item"><Link to="/login" className="nav-link" >Login</Link></li>
                                    <li className="nav-item"><Link onClick={this.logout} className="nav-link">Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        </>
    }
}

export default withRouter(Header)