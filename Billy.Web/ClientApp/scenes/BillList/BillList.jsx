import React from 'react';
import {Table} from 'Tables'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {actions} from 'Ducks/Bills'
import ListHeader from './ListHeader.jsx'

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
                tableHeader = {this.props.tableHeader}
                tableContent = {this.props.tableContent}/>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        bills: state.bills
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
