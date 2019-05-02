import React from "react";
import TreatmentDay from '../TreatmentDay/TreatmentDay'
import {
    Table
} from "reactstrap";

class Treatment extends React.Component {
    render() {
        
        const { personName, treatments, color, onChange, person } = this.props;
        
        return (
            <div>
                <div>
                    <h5 className="personTitle" style={{"backgroundColor": color}}>{personName}</h5>
                </div>
                <div className="salaryTable">
                    <Table responsive>
                        <thead className=" text-primary">
                        <tr>
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
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <TreatmentDay
                                    nameOfday="monday"
                                    noTreatmentsInDay={treatments.monday}
                                    onChange={onChange}
                                    personName={personName}
                                    person={person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    nameOfday="tuesday"
                                    noTreatmentsInDay={treatments.tuesday}
                                    onChange={onChange}
                                    personName={personName}
                                    person={person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    nameOfday="wednesday"
                                    noTreatmentsInDay={treatments.wednesday}
                                    onChange={onChange}
                                    personName={personName}
                                    person={person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    nameOfday="thursday"
                                    noTreatmentsInDay={treatments.thursday}
                                    onChange={onChange}
                                    personName={personName}
                                    person={person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    nameOfday="friday"
                                    noTreatmentsInDay={treatments.friday}
                                    onChange={onChange}
                                    personName={personName}
                                    person={person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    nameOfday="saturday"
                                    noTreatmentsInDay={treatments.saturday}
                                    onChange={onChange}
                                    personName={personName}
                                    person={person}
                                />
                            </td>
                            <td>
                                <TreatmentDay
                                    nameOfday="sunday"
                                    noTreatmentsInDay={treatments.sunday}
                                    onChange={onChange}
                                    personName={personName}
                                    person={person}
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

