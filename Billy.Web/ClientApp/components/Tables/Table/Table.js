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
            {content.map((row, key)=>
            <tr key={key}>
                {row.map((item, key)=>
                <td key={key}>
                    {item}
                </td>
                )}
            </tr>)}
        </tbody>
        </table>
    )
}

export default Table;