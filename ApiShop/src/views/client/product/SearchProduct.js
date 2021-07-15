import React from 'react'

import Banner from '../../../components/client/Banner/Banner'
import DealOfWeek from '../../../components/client/Deal of week/DealOfWeek'
import CardAllProduct from '../../../components/client/Cards/CardAllProduct'

export default class SearchProduct extends React.Component {
    render() {
        return<div>
           <Banner/>
           <br/>
           <br/>
           <CardAllProduct/>
           <DealOfWeek/>
        </div>
    }
}