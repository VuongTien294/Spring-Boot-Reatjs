import Banner from 'components/client/Banner/Banner'
import React from 'react'
import CardLogin from '../../../components/client/Cards/CardLogin'

export default class LoginMember extends React.Component{
    render(){
        return<div>
            <Banner/>
           <CardLogin/>
        </div>
    }

}