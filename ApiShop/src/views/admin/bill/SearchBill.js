import CardSearchBill from 'components/admin/Cards/CardSearchBill';
// import CardSearchProduct from 'components/admin/Cards/CardSearchProduct';
import React, { Component } from 'react'

export default class SearchProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            response: {//Response : Tra ve
                "recordsTotal": 0, //Tong so ban ghi co trong server
                "recordsFiltered": 0,//Tong so ban ghi tim duoc
                "data": [ // mang doi tuong chua doi tuong danh muc duoc tim thay
                ]
            },
            request: { "start": 0, "length": 100, "buyerId": "" },
            hasMore: true

        }
    }

    setParam = (event) => {
        // this.setState({ [event.target.name]: event.target.value })

        this.setState({
            request: { "start": 0, "length": 100, [event.target.name]: event.target.value }

        })
        console.log(this.state.request)
    }

    setSelectedId = (id) => {
        this.setState({ selectedId: id })
    }

    reset = () => {
        let request = this.state.request
        request.categoryId = this.state.request.categoryId
        this.setState({
            request, response: {
                "recordsTotal": 0,
                "recordsFiltered": 0,
                "data": [
                ]
            }
        }, this.loadPost)
    }

    loadBill = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

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
            let response = await fetch("http://localhost:8080/api/bill/search", requestOptions)
            if (response.ok) {
                let result = await response.json()
                this.setState({ response: result })
            }
        } catch (error) {
            console.log(error)
        }
    }

    delete = async (id) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };
        try {
            let response = await fetch("http://localhost:8080/api/bill/delete?id=" + id, requestOptions)
            if (response.ok) {
                alert("Xoa thanh cong!")
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }

    }

    render() {
        return <>

            <div className="flex flex-wrap mt-4">

                <div className="w-full mb-12 px-4">
                    <GetUser setParam={this.setParam} getBill={this.loadBill} /><br />
                    <CardSearchBill dataProperties={this.state.response.data} deleteProperties={this.delete} id={this.setSelectedId} /><br />
                </div>
            </div>

        </>
    }

}


class GetUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            users: []
        }

    }

    componentDidMount() {
        this.loadUser()
    }

    loadUser = async () => {
        const search = { "start": 0, "length": 200, "search": { "value": "" } }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        var raw = JSON.stringify(search);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:8080/api/admin/user/search", requestOptions)
            let result = await response.json()
            console.log(result.data)

            this.setState({ users: result.data })
        } catch (error) {
            console.log('error', error)
        }
    }

    render() {
        return <div>
            <label>Search Form</label>
            <form>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-12/12 px-4">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                User Select
                </label>
                            <div className="relative inline-block w-full text-gray-700">
                                <select name="buyerId" value={this.state.buyerId} onChange={this.props.setParam} className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
                                    {this.state.users.map((user) => {
                                        return <option key={user.id} value={user.id}>{user.name}</option>
                                    })}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <button
                        className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button" onClick={this.props.getBill}
                    >
                        Load Bill
          </button>
                </div>
            </form>
        </div>
    }

}
