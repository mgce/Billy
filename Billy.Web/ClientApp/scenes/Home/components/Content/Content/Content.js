import React from 'react';
import {BillList} from 'Scenes/BillList';

const Content = props => {
    return(
        <div className="content">
            <BillList 
                tableHeader = {tableHeder}
                tableContent = {tableContent}/>
        </div>
    )
}

export default Content;

const tableHeder = [
    "Dostawca", "Termin", "Pozostało",
    "Kwota", "Status", "Kategoria"];

const tableContent = [
    ["T-mobile", "03.09", "3 dni", 
    "10zl", "Open", "Dom"],
    ["Orange", "13.09", "7 dni", 
    "120zl", "Open", "Telefon"],
]