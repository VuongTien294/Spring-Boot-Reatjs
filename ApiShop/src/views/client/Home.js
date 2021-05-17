import React from 'react'
import Banner from 'components/client/Banner/Banner.js'
import Feature from 'components/client/Features/Feature'
import CardProduct from 'components/client/Cards/CardProduct'
import Exclusive from 'components/client/Exclusive deal/Exclusive'
import BrandArea from 'components/client/Brand Area/BrandArea'
import DealOfWeek from 'components/client/Deal of week/DealOfWeek'


export default class Home extends React.Component {
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