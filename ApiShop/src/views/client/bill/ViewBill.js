import Banner from 'components/client/Banner/Banner'
import CardDetailBill from 'components/client/Cards/CardDetailBill'
import React from 'react'



export default class ViewBill extends React.Component{
    render(){
        return<div>
            <Banner/>
            <br/>
            <br/>
            <CardDetailBill/>
        </div>

    }
}