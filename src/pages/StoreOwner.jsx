import React from 'react'
import { useData } from '../hooks/useData'

const StoreOwner = () => {
    const { data } = useData()
    return (
        <table className='team-container' >
            <thead className='team-header'>
                <tr>
                    <td><span>Sr.No</span></td>
                    <td><span>Shop Name</span></td>
                    <td><span>Item Name</span></td>
                    <td><span>Qty</span></td>
                    <td><span>Price Per Item</span></td>
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
                    <td><span>{items.ShopName !== null  ? items.ShopName :'No-Data'}</span></td>
                    <td><span>{items.ItemName !== null  ? items.ItemName :'No-Data'}</span></td>
                    <td><span>{items.Qty !== null  ? items.Qty :'No-Data'}</span></td>
                    <td><span>{items.PricePerItem !== null  ? items.PricePerItem :'No-Data'}</span></td>
                </tr>
            </tbody>
        </>
    )
}

export default StoreOwner