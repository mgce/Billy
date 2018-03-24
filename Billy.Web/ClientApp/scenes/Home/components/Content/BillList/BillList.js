import React from 'react';

import ListHeader from '../listHeader/ListHeader';
import {Table} from 'Tables'

const BillList = ({tableHeader, tableContent}) => {
    return(
        <div className="bill-list">
            <ListHeader header={"Wrzesien"}/>
            <Table 
                header = {tableHeader}
                content = {tableContent}/>
        </div>
    )
}

export default BillList;