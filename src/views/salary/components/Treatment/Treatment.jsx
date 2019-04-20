import React from "react";
import TreatmentDay from '../TreatmentDay/TreatmentDay'
import {
    Table
} from "reactstrap";

class Treatment extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h5 className="personTitle" style={{"background-color": this.props.color}}>{this.props.personName}</h5>
                </div>
                <div className="salaryTable">
                    <Table responsive>
                        <thead className=" text-primary">
                        <th>
                            Hétfő
                        </th>
                        <th>
                            Kedd
                        </th>
                        <th>
                            Szerda
                        </th>
                        <th>
                            Csütörtök
                        </th>
                        <th>
                            Péntek
                        </th>
                        <th>
                            Szombat
                        </th>
                        <th>
                            Vasárnap
                        </th>

                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <TreatmentDay
                                    nameOfday="monday"
                                    noTreatmentsInDay={this.props.treatments.monday}
                                    onChange={this.props.onChange}
                                    personName={this.props.personName}
                                    person={this.props.person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    nameOfday="tuesday"
                                    noTreatmentsInDay={this.props.treatments.tuesday}
                                    onChange={this.props.onChange}
                                    personName={this.props.personName}
                                    person={this.props.person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    nameOfday="wednesday"
                                    noTreatmentsInDay={this.props.treatments.wednesday}
                                    onChange={this.props.onChange}
                                    personName={this.props.personName}
                                    person={this.props.person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    nameOfday="thursday"
                                    noTreatmentsInDay={this.props.treatments.thursday}
                                    onChange={this.props.onChange}
                                    personName={this.props.personName}
                                    person={this.props.person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    nameOfday="friday"
                                    noTreatmentsInDay={this.props.treatments.friday}
                                    onChange={this.props.onChange}
                                    personName={this.props.personName}
                                    person={this.props.person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    nameOfday="saturday"
                                    noTreatmentsInDay={this.props.treatments.saturday}
                                    onChange={this.props.onChange}
                                    personName={this.props.personName}
                                    person={this.props.person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    nameOfday="sunday"
                                    noTreatmentsInDay={this.props.treatments.sunday}
                                    onChange={this.props.onChange}
                                    personName={this.props.personName}
                                    person={this.props.person}
                                />
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Treatment

