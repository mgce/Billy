import React from 'react';

import ListHeader from '../components/listHeader';
import Table from '../../../../../components/Table/table'

const BillList = props => {
    return(
        <div className="bill-list">
            <ListHeader header={"Wrzesien"}/>
            <Table 
                header = {tableHeder}
                content = {tableContent}/>
        </div>
    )
}

export default BillList;