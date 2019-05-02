import React from "react";
import {
    Table,
} from "reactstrap";
import NumberFormat from 'react-number-format';

class Salary extends React.Component {

    render() {

        const { treatments } = this.props;

        return (
            <div>
                <Table responsive>
                    <thead className=" text-primary">
                    <tr>
                        <th style={{"backgroundColor": this.props.color, "color": "black"}}>
                            {this.props.label}
                        </th>
                    </tr>
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
                            h: {treatments ? treatments.monday: 0},
                            k: {treatments ? treatments.tuesday: 0},
                            sz: {treatments ? treatments.wednesday: 0},
                            cs: {treatments ? treatments.thursday: 0},
                            p: {treatments ? treatments.friday: 0},
                            sz: {treatments ? treatments.saturday: 0},
                            v: {treatments ? treatments.sunday: 0},
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Salary;