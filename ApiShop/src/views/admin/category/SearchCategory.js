import React from "react";
// import CardSearchCategory from "components/Cards/CardSearchCategory.js";
import CardSearchCategory from "../../../components/admin/Cards/CardSearchCategory";

export default class SearchCategory extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      response: {//Response : Tra ve
        "recordsTotal": 0, //Tong so ban ghi co trong server
        "recordsFiltered": 0,//Tong so ban ghi tim duoc
        "data": [ // mang doi tuong chua doi tuong danh muc duoc tim thay
        ]
      },
      search: { "start": 0, "length": 2, "search": { "value": "" } },//Request: Yeu cau.0 la vi tri dau tien.lenght la so ban ghi can lay
      hasMore: true,//khai bao them thuoc tinh hasMore de bat du lieu cho nut loadMore.set gia tri ban dau la true
    }
  }

  componentDidMount() {
    this.loadCategory()
  }


  loadCategory = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(this.state.search); // thuoc tinh search tren state luc dau start = 0 va lenght = 2. Bat dau tai 0 va tra ve 2 doi tuong

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    try {
      let response = await fetch("http://localhost:8080/api/category/search", requestOptions)
      let result = await response.json()//mang doi tuong json tra ve
      // this.setState({ response: result })//set lai cai state de thay doi gia tri


      //loadMore va button phan trang 
      let oldResp = this.state.response //response cu tra ve
      oldResp.data = oldResp.data.concat(result.data)//gan lai mang tra ve se la hop cua 2 mang cu va moi

      //Xu li so trang tra ve.An button 1 2 3 4 de tra ve 1 trang du lieu moi
      oldResp.recordsFiltered = result.recordsFiltered//gan lai so ban ghi tim duoc cu = moi

      this.setState({ response: oldResp, hasMore: result.data.length === this.state.search.length })//set lai State.
    } catch (error) {
      console.log('error', error)
    }
  }

  search = (event) => {
    let value = event.target.value // lay gia tri nguoi dung nhap vao
    let search = {
      "start": 0, "length": 2, "search": { "value": value }
    }

    // this.setState({
    //     search       
    // }, this.loadCategory) 

    this.setState({
      search, response: {//Set lai State.do bien search o ham search nay trung ten vs bien search o state nen ko can : .   
        "recordsTotal": 0,
        "recordsFiltered": 0,
        "data": [
        ]
      }
    }, this.loadCategory) //funtion callback de goi lai ham khi da setState thanh cong
  }


  loadMore = () => {
    let search = this.state.search
    search.start += search.length//Luc dau thi lenght la 2.Nen ta cho start + them 2 nua de tra ve ban ghi bat dau tu so 2
    this.setState({ search }, this.loadCategory)
    //lenght la so ban ghi can lay nen ko can thay doi.Chi can thay doi so ban ghi bat dau len thoi
  }

  page = (i) => {
    let search = this.state.search
    search.start = search.length * (i - 1)

    this.setState({
      search, response: {//Set lai State.do bien search o ham search nay trung ten vs bien search o state nen ko can : .   
        "recordsTotal": 0,
        "recordsFiltered": 0,
        "data": [
        ]
      }
    }, this.loadCategory)
  }

  setSelectedId = (id) => {
    this.setState({ selectedId: id })
  }

  reset = () => {
    let search = this.state.search
    search.start = 0
    this.setState({
      search, response: {
        "recordsTotal": 0,
        "recordsFiltered": 0,
        "data": [
        ]
      }
    }, this.loadCategory)
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

    fetch("http://localhost:8080/api/admin/category/delete?id=" + id, requestOptions)
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
    let paging = []//tao mang
    //duyet mang luc dau trang se la 1.Neu trang hien tai ma <= (so ban ghi tim duoc)/(so ban ghi can lay)
    //Vi du so ban ghi tim duoc la 8 ma so ban ghi can lay la 2 thi giao dien se show ra 4 trang
    for (let i = 1; i <= Math.ceil(this.state.response.recordsFiltered / this.state.search.length); i++) {
      paging.push(<button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="button" key={i} onClick={() => this.page(i)}>{i}</button>)
    }
    return <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardSearchCategory dataProperties={this.state.response.data} deleteProperties={this.delete} />
          {this.state.hasMore && <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" variant="outline-primary" onClick={this.loadMore}>Load More</button>}
          {paging}
        </div>
      </div>
    </>
  }


}
