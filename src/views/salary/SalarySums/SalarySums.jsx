import React from "react";
import {
    Card, CardBody, CardHeader, CardTitle, Col, Row, Table,
} from "reactstrap";
import Salary from "../components/Salary/Salary";

class SalarySums extends React.Component {

    render() {
        const {salaries} = this.props;
        return (
            <div>

                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Fizetések</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Table responsive>

                            <tbody>
                            <tr>
                                <td>
                                    <Salary
                                        label={"Anita"}
                                        personSalary={salaries.anita}
                                        sumPersonTreatmentHours={this.props.calcSumPersonTreatmentHours('anita')}
                                        color="#99ff66"
                                        treatments={this.props.treatments.anita}
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Áron"}
                                        personSalary={this.props.salaries.aron}
                                        sumPersonTreatmentHours={this.props.calcSumPersonTreatmentHours('aron')}
                                        color="#cc33ff"
                                        treatments={this.props.treatments.aron}
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Barbi"}
                                        personSalary={this.props.salaries.barbi}
                                        sumPersonTreatmentHours={this.props.calcSumPersonTreatmentHours('barbi')}
                                        color="#FF00FF"
                                        treatments={this.props.treatments.barbi}
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Budai Zsuzsi"}
                                        personSalary={this.props.salaries.beriZsuzsi}
                                        sumPersonTreatmentHours={this.props.calcSumPersonTreatmentHours('beriZsuzsi')}
                                        color="#FF0000"
                                        treatments={this.props.treatments.beriZsuzsi}
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Gábor"}
                                        personSalary={this.props.salaries.gabor}
                                        sumPersonTreatmentHours={this.props.calcSumPersonTreatmentHours('gabor')}
                                        color="#f49e42"
                                        treatments={this.props.treatments.gabor}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Salary
                                        label={"Hajni"}
                                        personSalary={this.props.salaries.hajni}
                                        sumPersonTreatmentHours={this.props.calcSumPersonTreatmentHours('hajni')}
                                        color="#33cc33"
                                        treatments={this.props.treatments.hajni}
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Reni"}
                                        personSalary={this.props.salaries.reni}
                                        sumPersonTreatmentHours={this.props.calcSumPersonTreatmentHours('reni')}
                                        treatments={this.props.treatments.reni}
                                        color="#ffff00"
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Tomi"}
                                        personSalary={this.props.salaries.tomi}
                                        sumPersonTreatmentHours={this.props.calcSumPersonTreatmentHours('tomi')}
                                        color="#0066ff"
                                        treatments={this.props.treatments.tomi}
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Vera"}
                                        personSalary={this.props.salaries.vera}
                                        sumPersonTreatmentHours={this.props.calcSumPersonTreatmentHours('vera')}
                                        color="#ff5050"
                                        treatments={this.props.treatments.vera}
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Máté Zsuzsi"}
                                        personSalary={this.props.salaries.mZsuzsi}
                                        sumPersonTreatmentHours={this.props.calcSumPersonTreatmentHours('mZsuzsi')}
                                        color="#66ccff"
                                        treatments={this.props.treatments.mZsuzsi}
                                    />
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>

            </div>
        )
    }
}

export default SalarySums;