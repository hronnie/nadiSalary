import React from "react";
import NumericInput from 'react-numeric-input';

class TreatmentDay extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <NumericInput mobile
                                  name={this.props.nameOfday}
                                  onChange={input =>
                                      this.props.onChange(
                                          input, this.props.person, this.props.nameOfday
                                      )}
                                  value={this.props.noTreatmentsInDay}
                                  min={0}
                                  size={7}/>
                </div>
            </div>
        )
    }
}

export default TreatmentDay

