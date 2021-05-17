import React from 'react'

import Banner from '../../../components/client/Banner/Banner'
import DealOfWeek from '../../../components/client/Deal of week/DealOfWeek'
import CardViewProduct from '../../../components/client/Cards/CardViewProduct'

export default class DetailProduct extends React.Component {
    render() {
        return<div>
           <Banner/>
           <CardViewProduct/>
           <DealOfWeek/>
        </div>
    }
}