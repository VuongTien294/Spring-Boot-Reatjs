import CardSearchUser from 'components/admin/Cards/CardSearchUser';
import React from 'react'

export default class SearchUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            response: {//Response : Tra ve
                "recordsTotal": 0, //Tong so ban ghi co trong server
                "recordsFiltered": 0,//Tong so ban ghi tim duoc
                "data": [ // mang doi tuong chua doi tuong danh muc duoc tim thay
                ]
            },
            request: { "start": 0, "length": 2, "search": { "value": "" } },
            hasMore: true

        }
    }

    componentDidMount() {
        this.loadUser()
    }

    search = (event) => {
        let value = event.target.value
        let request = {
            "start": 0, "length": 2, "search": { "value": value }
        }
        this.setState(
            {
                request,
                response: {//Response : Tra ve
                    "recordsTotal": 0, //Tong so ban ghi co trong server
                    "recordsFiltered": 0,//Tong so ban ghi tim duoc
                    "data": [ // mang doi tuong chua doi tuong danh muc duoc tim thay
                    ]
                }
            }, this.loadUser
        )
    }

    loadMore = () => {
        let request = this.state.request
        request.start += request.length
        this.setState({ request }, this.loadUser)
    }

    page = (i) => {
        let request = this.state.request
        request.start = request.length * (i - 1)

        this.setState({
            request, response: {//Set lai State.do bien search o ham search nay trung ten vs bien search o state nen ko can : .   
                "recordsTotal": 0,
                "recordsFiltered": 0,
                "data": [
                ]
            }
        }, this.loadUser)
    }

    reset = () => {
        let request = this.state.request
        request.start = 0
        this.setState({
            request, response: {
                "recordsTotal": 0,
                "recordsFiltered": 0,
                "data": [
                ]
            }
        }, this.loadUser)
    }

    loadUser = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("accessToken"));

        var raw = JSON.stringify(this.state.request);


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };


        try {
            let response = await fetch("http://localhost:8080/api/admin/user/search", requestOptions)
            let result = await response.json()
            let oldResp = this.state.response
            oldResp.data = oldResp.data.concat(result.data)
            oldResp.recordsFiltered = result.recordsFiltered

            this.setState({ response: oldResp, hasMore: result.data.length == this.state.request.length })

            // this.setState({ response: result })
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
            let response = await fetch("http://localhost:8080/api/admin/user/delete?id=" + id, requestOptions)
            if (response.ok) {
                alert("Xoa Thanh Cong!")
                this.reset()
                return
            }
        } catch (error) {
            console.log(error)
        }


    }

    render() {
        let paging = []//tao mang
        //duyet mang luc dau trang se la 1.Neu trang hien tai ma <= (so ban ghi tim duoc)/(so ban ghi can lay)
        //Vi du so ban ghi tim duoc la 8 ma so ban ghi can lay la 2 thi giao dien se show ra 4 trang
        for (let i = 1; i <= Math.ceil(this.state.response.recordsFiltered / this.state.request.length); i++) {
            paging.push(<button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" variant="primary" type="button" key={i} onClick={() => this.page(i)}>{i}</button>)
        }

        return <>

            <div className="flex flex-wrap mt-4">

                <div className="w-full mb-12 px-4">
                    <CardSearchUser dataProperties={this.state.response.data} deleteProperties={this.delete} />
                    {this.state.hasMore && <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" variant="outline-primary" onClick={this.loadMore}>Load More</button>}
                    {paging}

                </div>
            </div>

        </>
    }

}
