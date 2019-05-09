import React from "react";
import {
    Card, CardBody, CardHeader, CardTitle, Col, Row, Table,
} from "reactstrap";
import Salary from "../Salary/Salary";

class SalarySums extends React.Component {

    render() {
        const { salaries, calcSumPersonTreatmentHours, treatments } = this.props;
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
                                        sumPersonTreatmentHours={calcSumPersonTreatmentHours('anita')}
                                        color="#99ff66"
                                        treatments={treatments.anita}
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Áron"}
                                        personSalary={salaries.aron}
                                        sumPersonTreatmentHours={calcSumPersonTreatmentHours('aron')}
                                        color="#cc33ff"
                                        treatments={treatments.aron}
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Barbi"}
                                        personSalary={salaries.barbi}
                                        sumPersonTreatmentHours={calcSumPersonTreatmentHours('barbi')}
                                        color="#FF00FF"
                                        treatments={treatments.barbi}
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Budai Zsuzsi"}
                                        personSalary={salaries.beriZsuzsi}
                                        sumPersonTreatmentHours={calcSumPersonTreatmentHours('beriZsuzsi')}
                                        color="#FF0000"
                                        treatments={treatments.beriZsuzsi}
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Gábor"}
                                        personSalary={salaries.gabor}
                                        sumPersonTreatmentHours={calcSumPersonTreatmentHours('gabor')}
                                        color="#f49e42"
                                        treatments={treatments.gabor}
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Gergő"}
                                        personSalary={salaries.gergo}
                                        sumPersonTreatmentHours={calcSumPersonTreatmentHours('gergo')}
                                        color="white"
                                        treatments={treatments.gergo}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Salary
                                        label={"Hajni"}
                                        personSalary={salaries.hajni}
                                        sumPersonTreatmentHours={calcSumPersonTreatmentHours('hajni')}
                                        color="#33cc33"
                                        treatments={treatments.hajni}
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Reni"}
                                        personSalary={salaries.reni}
                                        sumPersonTreatmentHours={calcSumPersonTreatmentHours('reni')}
                                        treatments={treatments.reni}
                                        color="#ffff00"
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Tomi"}
                                        personSalary={salaries.tomi}
                                        sumPersonTreatmentHours={calcSumPersonTreatmentHours('tomi')}
                                        color="#0066ff"
                                        treatments={treatments.tomi}
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Vera"}
                                        personSalary={salaries.vera}
                                        sumPersonTreatmentHours={calcSumPersonTreatmentHours('vera')}
                                        color="#ff5050"
                                        treatments={treatments.vera}
                                    />
                                </td>
                                <td>
                                    <Salary
                                        label={"Máté Zsuzsi"}
                                        personSalary={salaries.mZsuzsi}
                                        sumPersonTreatmentHours={calcSumPersonTreatmentHours('mZsuzsi')}
                                        color="#66ccff"
                                        treatments={treatments.mZsuzsi}
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