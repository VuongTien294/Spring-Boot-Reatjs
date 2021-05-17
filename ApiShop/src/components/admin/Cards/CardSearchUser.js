import React from 'react'
import { Link } from 'react-router-dom';

export default class CardSearchUser extends React.Component {

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
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Age</th>
                        <th className="px-4 py-2">Role</th>
                        <th className="px-4 py-2">UserName</th>
                        <th className="px-4 py-2">Address</th>
                        <th className="px-4 py-2">Gender</th>
                        <th className="px-4 py-2">Phone</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">About</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.dataProperties.map(item => {
                        return <tr key={item.id}>
                            <td className="px-4 py-2">{item.id}</td>
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">{item.age}</td>   
                            <td className="px-4 py-2">{item.roles}</td>                        
                            <td className="px-4 py-2">{item.username}</td>
                            <td className="px-4 py-2">{item.address}</td>
                            <td className="px-4 py-2">{item.gender}</td>
                            <td className="px-4 py-2">{item.phone}</td>
                            <td className="px-4 py-2">{item.email}</td>
                            <td className="px-4 py-2">
                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button"><Link to={"/admin/user/update/" + item.id}><i
                                            className={
                                                "fas fa-tools mr-2 text-sm" 
                                            }
                                        ></i></Link></button>
                                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button" onClick={() => { this.props.deleteProperties(item.id) }}><i className="fas fa-trash-alt  mr-2 text-sm"></i></button>
                                {/* <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="button"><Link to={"/admin/user/view/" + item.id}>View</Link></button> */}
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