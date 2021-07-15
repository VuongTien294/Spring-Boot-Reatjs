import React from 'react'
import Banner from 'components/client/Banner/Banner.js'
import Feature from 'components/client/Features/Feature'
import CardProduct from 'components/client/Cards/CardProduct'
import Exclusive from 'components/client/Exclusive deal/Exclusive'
import BrandArea from 'components/client/Brand Area/BrandArea'
import DealOfWeek from 'components/client/Deal of week/DealOfWeek'


export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           id:"",
           name:"",
           phone:"",
           email:"",
           username:"",
           password:""
        }
    }

    setUser = async()=>{
        let jwt = localStorage.getItem("accessToken")
        if(jwt!= null){

            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer "+jwt);
            
            var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };
            try {
                let response = await fetch("http://localhost:8080/api/member/me", requestOptions)
                if(response.ok){
                    let result = await response.json()
                    this.setState({
                        id:result.id,
                        name:result.name,
                        phone:result.phone,
                        email:result.email
                    })
                    localStorage.setItem("user",JSON.stringify(this.state))
                } 
            } catch (error) {
                console.log(error)
            }

        } 
    }

    componentDidMount() {
        this.setUser()
    }

    render() {
        return <div>
            <Banner />
            <Feature />
            <Exclusive />
            <CardProduct />
            <BrandArea />
            <DealOfWeek />
        </div>
    }
}