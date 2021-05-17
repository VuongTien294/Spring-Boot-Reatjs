import React from "react";
import { withRouter } from 'react-router-dom';

// components

 class CardUpdateCoupon extends React.Component {
    constructor(props) {
        super(props)
        
        let { match } = this.props
        let { id } = match.params

        console.log(id)

        this.state = {
            id: id,
            code: "",
            persent: "",
            expiredDate: ""
        }
    }

    componentDidMount(){
        if(this.state.id){
            this.loadCoupon()
        }
        
    }

    setParams=(event)=>{
        this.setState({[event.target.name] : event.target.value})
    }


    loadCoupon = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));


        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        try {
            let response = await fetch("http://localhost:8080/api/admin/coupon/" + this.state.id, requestOptions)
            if(response.ok){
                let result = await response.json()
                this.setState({ ...result })
            }
 
        } catch (error) {
            console.log('error', error)
        }
    }

    updateCoupon = async ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(this.state);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/admin/coupon/update", requestOptions)
            .then(response => {
                if (response.ok) {
                    let {history} = this.props
                    history.goBack()
                    return;
                }
                throw new Error(response.status)
            })
            .then(result => {
                alert("Update thanh cong")

            })
            .catch(error => {
                console.log('error', error)
                alert("Danh muc da ton tai")
            });
    }

render(){
    return <div>
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">Coupon</h6>
            </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Update Coupon
               </h6>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Coupon Code
              </label>
                            <input
                                type="text" name="code" onChange={this.setParams} value={this.state.code}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Coupon Persent
              </label>
                            <input
                                type="number" name="persent" onChange={this.setParams} value={this.state.persent}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                Expired Date
              </label>
                            <input
                                type="text" name="expiredDate" onChange={this.setParams} placeholder="dd/mm/yyyy" value={this.state.expiredDate}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <button
                        className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button" onClick={this.updateCoupon}
                    >
                        Update Coupon
        </button>
                </div>
            </form>
        </div>
    </div>
</div>
}
}

export default withRouter(CardUpdateCoupon)