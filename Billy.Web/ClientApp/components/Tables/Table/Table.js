import React from 'react';

const Table = ({header, content}) => {
    return(
        <table className="table">
            <thead>
                <tr className = "table-head">
                    {header.map((item, key) => 
                        <th key={key}>
                            {item}
                        </th>
                    )}
                </tr>
            </thead>
        <tbody>
            {content.map((item, key)=>
            <tr key={item.billId}>
                <td>
                    {item.supplier}
                </td>
                <td>
                    {item.paymentDate}
                </td>
                <td>
                    {item.daysLeft} {item.daysLeft > 1 ? 'days' : 'day'}
                </td>
                <td>
                    {item.amountValue + " " + item.currency}
                </td>
                <td>
                    {item.status}
                </td>
                <td>
                    {item.category}
                </td>
            </tr>)}
        </tbody>
        </table>
    )
}

export default Table;