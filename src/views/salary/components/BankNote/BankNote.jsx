import React from "react";
//import {Col, Row} from "reactstrap/src";

class BankNote extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <label>{this.props.label}</label>
                </div>
                <div>
                    <input
                        type="number"
                        name={this.props.name}
                        onChange={this.props.onChangeBankNote}
                        value={this.props.banknoteValue}/>
                </div>
            </div>
        )
    }
}

export default BankNote;