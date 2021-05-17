import React from 'react'
import { Link } from 'react-router-dom';

export default class CardSearchBill extends React.Component{


    render() { 
        return <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded  " 
          +("bg-white")
        }
      >
         <div>
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Id</th>
                        <th className="px-4 py-2">Buyer Id</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Price total</th>
                        <th className="px-4 py-2">Pay</th>
                        <th className="px-4 py-2">About</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.dataProperties.map(item => {
                        return <tr key={item.id}>
                            <td className="px-4 py-2">{item.id}</td>
                            <td className="px-4 py-2">{item.buyerId}</td>
                            <td className="px-4 py-2">{item.status}</td>
                            <td className="px-4 py-2">{item.priceTotal}</td>
                            <td className="px-4 py-2">{item.pay}</td>
                            <td className="px-4 py-2">
                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button" onClick={() => { this.props.deleteProperties(item.id) }}><i className="fas fa-trash-alt  mr-2 text-sm"></i></button>
                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button"><Link to={"/admin/bill/view/" + item.id}><i className="far fa-address-card"></i></Link></button>
                            </td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
        </div>
        </>
    }

}