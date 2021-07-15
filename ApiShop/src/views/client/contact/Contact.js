import Banner from 'components/client/Banner/Banner'
import CardContact from 'components/client/Cards/CardContact'
import React from 'react'

export default class Contact extends React.Component{
    render(){
        return<div>
            <Banner/>
            <br/>
            <br/>
            <CardContact/>
        </div>
    }
}