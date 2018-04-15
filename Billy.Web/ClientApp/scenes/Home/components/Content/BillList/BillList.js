import React from 'react';
import ListHeader from '../listHeader/ListHeader';
import {Table} from 'Tables'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {actions} from 'Ducks/Bills'


const BillListView = ({tableHeader, tableContent}) => {
    return(
        <div className="bill-list">
            <ListHeader header={"Wrzesien"}/>
            <Table 
                header = {tableHeader}
                content = {tableContent}/>
        </div>
    )
}

export default class BillList extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount = () =>{
    }
    render(){
        return(
            <BillListView />
        )
    }
}

const mapStateToProps = (state) => {
    props: state.bills
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        ...actions
    }, dispatch)
})


export default connect(
    mapStateToProps, 
    mapDispatchToProps)(BillList)
