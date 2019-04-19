import React from "react";
import {
    Table
} from "reactstrap";

class BankNote extends React.Component {
    render() {
        return (
            <div>
                <Table responsive>
                    <thead className=" text-primary">
                    <th>
                        {this.props.label}
                    </th>

                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="number"
                                    name={this.props.name}
                                    onChange={this.props.onChangeBankNote}
                                    value={this.props.banknoteValue}
                                    size={5}/>
                            </td>
                        </tr>
                     </tbody>
                </Table>
            </div>
        )
    }
}

export default BankNote;