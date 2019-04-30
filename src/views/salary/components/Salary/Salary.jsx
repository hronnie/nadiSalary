import React from "react";
import {
    Table,
} from "reactstrap";
import NumberFormat from 'react-number-format';

class Salary extends React.Component {

debugger;
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
                    <tr>
                        <td>
                            h: {this.props.treatments ? this.props.treatments.monday: 0},
                            k: {this.props.treatments ? this.props.treatments.tuesday: 0},
                            sz: {this.props.treatments ? this.props.treatments.wednesday: 0},
                            cs: {this.props.treatments ? this.props.treatments.thursday: 0},
                            p: {this.props.treatments ? this.props.treatments.friday: 0},
                            sz: {this.props.treatments ? this.props.treatments.saturday: 0},
                            v: {this.props.treatments ? this.props.treatments.sunday: 0},
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Salary;