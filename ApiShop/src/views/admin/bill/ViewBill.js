import CardSearchBillProduct from 'components/admin/Cards/CardSearchBillProduct';
import React from 'react'
import { withRouter } from 'react-router';

 class ViewBill extends React.Component {
    constructor(props) {
        super(props)

        let { match } = this.props
        let { id } = match.params

        this.state = {
            response: {//Response : Tra ve
                "recordsTotal": 0, //Tong so ban ghi co trong server
                "recordsFiltered": 0,//Tong so ban ghi tim duoc
                "data": [ // mang doi tuong chua doi tuong danh muc duoc tim thay
                ]
            },
            request: { "start": 0, "length": 100, "billId": id },
            hasMore: true

        }
    }

    componentDidMount() {
        this.loadBillProduct()
    }

    loadBillProduct = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(this.state.request);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };

        try {
            let response = await fetch("http://localhost:8080/api/billproduct/search", requestOptions)
            let result = await response.json()
            console.log(result)
            this.setState({
               response:result
            })

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
            let response = await fetch("http://localhost:8080/api/billproduct/delete?id=" + id, requestOptions)
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
                    <CardSearchBillProduct dataProperties={this.state.response.data} deleteProperties={this.delete} id={this.setSelectedId} /><br />
                    </div>
                </div>
           
        </>
    }
}

export default withRouter(ViewBill)

