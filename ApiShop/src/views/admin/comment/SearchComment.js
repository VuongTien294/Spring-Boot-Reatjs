import React from "react";

import CardSearchComment from "../../../components/admin/Cards/CardSearchComment";

export default class SearchComment extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            response: {
                "recordsTotal": 0, 
                "recordsFiltered": 0,
                "data": [ 
                ]
            },
            request: { "start": 0, "length": 100,"productId": "" },
            
        }
    }

    setParam = (event) => {
        this.setState({
            request: { "start": 0, "length": 100,[event.target.name]: event.target.value }

        })
    }


    loadComment = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        console.log(this.state.request)

        var raw = JSON.stringify(this.state.request);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:8080/api/comment/search", requestOptions)
            let result = await response.json()
            if(response.ok){
                this.setState({response : result})
            }
        } catch (error) {
            console.log('error', error)
        }
    }

    delete = (id) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        var urlencoded = new URLSearchParams();

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/admin/comment/delete?id=" + id, requestOptions)
            .then(response => {
                if (response.ok) {
                    alert("Xoa thanh cong")
                    this.reset()
                    return;
                }
                throw new Error(response.status)
            })
            .catch(error => alert("Xoa that bai"));
    }


    render() {

        return <>
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                    <GetProduct setParam={this.setParam} loadComment={this.loadComment} /><br/>
                    <CardSearchComment dataProperties={this.state.response.data} deleteProperties={this.delete} />
                </div>
            </div>
        </>
    }


}

class GetProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            products: []
        }
    }

    componentDidMount() {
        this.loadProduct()
    }

    loadProduct = async () => {
        const request = { "start": 0, "length": 200, "categoryId": "" }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(request);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            let response = await fetch("http://localhost:8080/api/product/search", requestOptions)
            let result = await response.json()
            this.setState({ products: result.data })
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
                                Product Select
                </label>
                            <div className="relative inline-block w-full text-gray-700">
                                <select name="productId" value={this.state.productId} onChange={this.props.setParam} className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
                                    {this.state.products.map((product) => {
                                        return <option key={product.id} value={product.id}>{product.name}</option>
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
                        type="button" onClick={this.props.loadComment}
                    >
                        Load Comment
          </button>
                </div>
            </form>
        </div>
    }

}
