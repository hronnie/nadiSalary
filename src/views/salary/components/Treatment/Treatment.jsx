import React from "react";
import TreatmentDay from '../TreatmentDay/TreatmentDay'

class Treatment extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <label>{this.props.personName}</label>
                </div>
                <div>
                    <table>
                        <tr>
                            <td>
                                <TreatmentDay
                                    labelOfDay="Hétfő"
                                    nameOfday="monday"
                                    noTreatmentsInDay={this.props.treatments.monday}
                                    onChange={this.props.onChange}
                                    personName={this.props.personName}
                                    person={this.props.person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    labelOfDay="Kedd"
                                    nameOfday="tuesday"
                                    noTreatmentsInDay={this.props.treatments.tuesday}
                                    onChange={this.props.onChange}
                                    personName={this.props.personName}
                                    person={this.props.person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    labelOfDay="Szerda"
                                    nameOfday="wednesday"
                                    noTreatmentsInDay={this.props.treatments.wednesday}
                                    onChange={this.props.onChange}
                                    personName={this.props.personName}
                                    person={this.props.person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    labelOfDay="Csütörtök"
                                    nameOfday="thursday"
                                    noTreatmentsInDay={this.props.treatments.thursday}
                                    onChange={this.props.onChange}
                                    personName={this.props.personName}
                                    person={this.props.person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    labelOfDay="Péntek"
                                    nameOfday="friday"
                                    noTreatmentsInDay={this.props.treatments.friday}
                                    onChange={this.props.onChange}
                                    personName={this.props.personName}
                                    person={this.props.person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    labelOfDay="Szombat"
                                    nameOfday="saturday"
                                    noTreatmentsInDay={this.props.treatments.saturday}
                                    onChange={this.props.onChange}
                                    personName={this.props.personName}
                                    person={this.props.person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    labelOfDay="Vasárnap"
                                    nameOfday="sunday"
                                    noTreatmentsInDay={this.props.treatments.sunday}
                                    onChange={this.props.onChange}
                                    personName={this.props.personName}
                                    person={this.props.person}
                                />
                            </td>
                        </tr>
                    </table>

                </div>
            </div>
        )
    }
}

export default Treatment

