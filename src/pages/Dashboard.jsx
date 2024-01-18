import React from 'react'
import { useData } from '../hooks/useData'

const Dashboard = () => {
    const { data } = useData()
    
     
    return (
        <table className='team-container' >
            <thead className='team-header'>
                <tr>
                    <td><span>Sr.No</span></td>
                    <td><span>Shop Name</span></td>
                    <td><span>name</span></td>
                    <td><span>Email</span></td>
                    <td><span>Phone Number</span></td>
                    <td><span>Txn Status</span></td>
                    <td><span>Total Amount</span></td>
                </tr>
            </thead>
            {
                data?.map((items, index) => <DataList key={index} items={items} index={index}/>)
            }
        </table>
    )
}

const DataList = ({ items, index }) => {
    return (
        <>
            <tbody className='team-data-list' >
                <tr>
                    <td><span>{index+1}</span></td>
                    <td><span >{items.ShopName !== null  ? items.ShopName :'No-Data' }</span></td>
                    <td><span>{items.Name !== null  ? items.Name :'No-Data'}</span></td>
                    <td><span>{items.Email !== null  ? items.Email :'No-Data'}</span></td>
                    <td><span>{items.Phone !== null  ? items.Phone :'No-Data'}</span></td>
                    <td><span>{items.TxnStatus !== null  ? items.TxnStatus :'No-Data'}</span></td>
                    <td><span>{items.TotalAmount !== null  ? items.TotalAmount :'No-Data'}</span></td>
                </tr>
            </tbody>
        </>
    )
}

export default Dashboard