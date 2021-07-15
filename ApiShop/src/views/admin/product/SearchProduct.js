import CardSearchProduct from 'components/admin/Cards/CardSearchProduct';
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
            request: { "start": 0, "length": 100, "categoryId": "" },
            hasMore: true

        }
    }

    setParam = (event) => {
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

    delete = async (id) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));


        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };
        try {
            let response = await fetch("http://localhost:8080/api/admin/product/delete?id=" + id, requestOptions)
            if (response.ok) {
                alert("Xoa thanh cong!")
                this.reset()


            }
        } catch (error) {
            console.log(error)
        }

    }

    render() {
        return <>
          
                <div className="flex flex-wrap mt-4">
                   
                    <div className="w-full mb-12 px-4">
                    <GetCategory setParam={this.setParam} getProduct={this.loadProduct} /><br />
                    <CardSearchProduct dataProperties={this.state.response.data} deleteProperties={this.delete} id={this.setSelectedId} setSelectedIdProperties={this.setSelectedId} /><br />
                    </div>
                </div>
           
        </>
    }

}


class GetCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {

            categories: []
        }

    }

    componentDidMount() {
        this.loadCategory()
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
                                Category Select
                </label>
                            <div className="relative inline-block w-full text-gray-700">
                                <select name="categoryId" value={this.state.categoryId} onChange={this.props.setParam} className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
                                    {this.state.categories.map((category) => {
                                        return <option key={category.id} value={category.id}>{category.name}</option>
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
                        type="button" onClick={this.props.getProduct}
                    >
                        Load Product
          </button>
                </div>
            </form>
        </div>
    }

}
