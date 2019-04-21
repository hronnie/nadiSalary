import React from "react";
import {
    Table,
} from "reactstrap";
import NumberFormat from 'react-number-format';

class Salary extends React.Component {


    render() {
        return (
            <div>
                <Table responsive>
                    <thead className=" text-primary">
                    <th style={{"background-color": this.props.color, "color": "black"}}>
                        {this.props.label}
                    </th>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <NumberFormat
                                value={this.props.personSalary}
                                displayType={'text'}
                                thousandSeparator={true}
                                suffix={' Ft'}/>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Összes kezelés
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <NumberFormat
                                value={this.props.sumPersonTreatmentHours}
                                displayType={'text'}
                                thousandSeparator={true}
                                suffix={' db'}/>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Salary;