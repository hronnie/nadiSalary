import React from "react";

class Salary extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <label>{this.props.label}</label>
                </div>
                <div>
                    <input
                        type="number"
                        value={this.props.personSalary}
                        disabled={true}/>
                </div>
            </div>
        )
    }
}

export default Salary;