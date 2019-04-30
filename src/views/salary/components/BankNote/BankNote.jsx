import React from "react";
import {
    Table
} from "reactstrap";
import NumericInput from 'react-numeric-input';

class BankNote extends React.Component {
    render() {
        return (
            <div>
                <Table responsive>
                    <thead className=" text-primary">
                    <tr>
                        <th>
                            {this.props.label}
                        </th>
                    </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <NumericInput mobile
                                    name={this.props.name}
                                    onChange={input =>
                                        this.props.onChangeBankNote(
                                        input, this.props.name
                                        )}
                                    value={this.props.banknoteValue}
                                    min={0}
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