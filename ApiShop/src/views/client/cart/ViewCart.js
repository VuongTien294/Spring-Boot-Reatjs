import Banner from 'components/client/Banner/Banner'
import CardCart from 'components/client/Cards/CardCart'
import React from 'react'

export default class ViewCart extends React.Component{
    render(){
        return<div>
            <Banner/>
            <br/>
            <br/>
            <CardCart/>
        </div>
    }
}