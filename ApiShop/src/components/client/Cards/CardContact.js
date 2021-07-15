import React from 'react'
import GoogleMapReact from 'google-map-react';
import emailjs from 'emailjs-com';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class CardContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "from_name": "",
            "from_email": "",
            "subject": "",
            "message": ""
        }
    }

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    setParam = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hr5vf5o', 'template_ilwzgbn', e.target, 'user_uJABraIAq19uhEhre4HDw')
            .then((result) => {
                alert("Cam on ban da phan hoi !")
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {
        return <div>
            <section className="contact_area section_gap_bottom">
                <div className="container">
                    <div style={{ height: '50vh', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "" }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Shop"
                            />
                        </GoogleMapReact>
                    </div>

                    <br />
                    <br />

                    <div className="row">
                        <div className="col-lg-3">
                            <div className="contact_info">
                                <div className="info_item">
                                    <i className="lnr lnr-home"></i>
                                    <h6>Ha Dong, Ha Noi</h6>
                                    <p>Co so toi cao tuyet mat</p>
                                </div>
                                <div className="info_item">
                                    <i className="lnr lnr-phone-handset"></i>
                                    <h6><a href="tel:+0962894918">0962894918</a></h6>
                                    <p>T2-T6(9AM - 5PM)</p>
                                </div>
                                <div className="info_item">
                                    <i className="lnr lnr-envelope"></i>
                                    <h6><a href="mailto:vuongtien2942000@gmail.com">vuongtien2942000@gmail.com</a></h6>
                                    <p>Gui mail cho toi bat cu luc nao!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <form className="row contact_form" id="contactForm" noValidate="novalidate" onSubmit={this.sendEmail}>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="from_name" placeholder="Enter your name" onChange={this.setParam} />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="from_email" placeholder="Enter email address" onChange={this.setParam} />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" placeholder="Enter Subject" onChange={this.setParam} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" rows="1" placeholder="Enter Message" onChange={this.setParam}></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12 text-right">
                                    <button type="submit" className="primary-btn">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    }
}