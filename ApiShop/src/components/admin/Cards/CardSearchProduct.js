import React from 'react'
import { Link } from 'react-router-dom';

export default class CardSearchProduct extends React.Component {

    render() {
        return <>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded  "
                    + ("bg-white")
                }
            >
                <div>
                    <table className="table-fixed">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Id</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Image</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Quantity</th>
                                {/* <th className="px-4 py-2">CategoryId</th> */}
                                <th className="px-4 py-2">Category Name</th>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">About</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.dataProperties.map(item => {
                                return <tr key={item.id}>
                                    <td className="px-4 py-2">{item.id}</td>
                                    <td className="px-4 py-2">{item.name}</td>
                                    <td className="px-4 py-2">
                                        <img src={"http://localhost:8080/download?image=" + item.images} width={"100"} />
                                        {/* <img src={"D://images/image/" + item.images} width={"100"} /> */}
                                    </td>
                                    <td className="px-4 py-2">{item.price}</td>
                                    <td className="px-4 py-2">{item.quantity}</td>
                                    <td className="px-4 py-2">{item.categoryName}</td>
                                    <td className="px-4 py-2">{item.description}</td>
                                    <td className="px-4 py-2">

                                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button"><Link to={"/admin/product/update/" + item.id}><i
                                            className={
                                                "fas fa-tools mr-2 text-sm" 
                                            }
                                        ></i></Link></button>
                                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button" onClick={() => { this.props.deleteProperties(item.id) }}><i className="fas fa-trash-alt  mr-2 text-sm"></i></button>
                                        {/* <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button"><Link to={"/admin/product/view/" + item.id}>View</Link></button> */}
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