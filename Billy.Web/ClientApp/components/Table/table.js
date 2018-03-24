import React from 'react';

const Table = ({header, content}) => {
    return(
        <table className="table">
            <thead>
                <tr className = "table-head">
                    {header.map((item) => 
                        <th>
                            {item}
                        </th>
                    )}
                </tr>
            </thead>
        <tbody>
            {content.map((row)=>
            <tr>
                {row.map((item)=>
                <td>
                    {item}
                </td>
                )}
            </tr>)}
        </tbody>
        </table>
    )
}

export default Table;