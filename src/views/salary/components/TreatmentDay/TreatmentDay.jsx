import React from "react";

class TreatmentDay extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <input
                        type="number"
                        name={this.props.nameOfday}
                        onChange={this.props.onChange(this.props.personName, this.props.person)}
                        value={this.props.noTreatmentsInDay}/>
                </div>
            </div>
        )
    }
}

export default TreatmentDay

