import React from 'react';
import {Table} from 'Tables'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {actions} from 'Ducks/Bills'
import ListHeader from './ListHeader.jsx'
import {Loading} from 'Components/Loading'


const BillListView = ({tableHeader, billsState}) => {
    if(billsState.loading)
        return(
            <div className="bill-list">
                <Loading/>
            </div>
    )
    return(
        <div className="bill-list">
            <ListHeader header={"Wrzesien"}/>
            <Table 
                header = {tableHeader}
                content = {billsState.bills}/>
        </div>
    )
}

class BillList extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount = () =>{
        this.props.getAll();
    }
    render(){
        return(
            <BillListView
                billsState = {this.props.billsState}
                tableHeader = {this.props.tableHeader}
                tableContent = {this.props.tableContent}/>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        billsState: state.bills
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        ...actions
    }, dispatch)
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(BillList)
