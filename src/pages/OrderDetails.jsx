import React from 'react'
import { useData } from '../hooks/useData'

const OrderDetails = () => {
    const { data } = useData()
    return (
        <table className='team-container' >
            <thead className='team-header'>
                <tr>
                    <td><span>Sr.No</span></td>
                    <td><span>Order Details</span></td>
                    <td><span>Name</span></td>
                    <td><span>Email</span></td>
                    <td><span>Phone</span></td>
                    <td><span>Txn Status</span></td>
                    <td><span>Total Amount</span></td>
                    <td><span>Discount</span></td>
                    <td><span>Order Type</span></td>
                    <td><span>Rating</span></td>
                    <td><span>Order Status</span></td>
                    <td><span>Total Taxes</span></td>
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
                    <td><span>{items.OrderDetails !== null  ? items.OrderDetails :'No-Data'}</span></td>
                    <td><span>{items.Name !== null  ? items.Name :'No-Data'}</span></td>
                    <td><span>{items.Email !== null  ? items.Email :'No-Data'}</span></td>
                    <td><span>{items.Phone !== null  ? items.Phone :'No-Data'}</span></td>
                    <td><span>{items.TxnStatus !== null  ? items.TxnStatus :'No-Data'}</span></td>
                    <td><span>{items.TotalAmount !== null  ? items.TotalAmount :'No-Data'}</span></td>
                    <td><span>{items.Discount !== null  ? items.Discount :'No-Data'}</span></td>
                    <td><span>{items.OrderType !== null  ? items.OrderType :'No-Data'}</span></td>
                    <td><span>{items.Rating !== null  ? items.Rating :'No-Data'}</span></td>
                    <td><span>{items.OrderStatus !== null  ? items.OrderStatus :'No-Data'}</span></td>
                    <td><span>{items.TotalTaxes !== null  ? items.TotalTaxes :'No-Data'}</span></td>
                </tr>
            </tbody>
        </>
    )
}

export default OrderDetails