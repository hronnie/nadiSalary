import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Row,
    Col, Alert
} from "reactstrap";

import {Formik, Field, Form, ErrorMessage} from 'formik';


class SalaryCalc extends React.Component {
    constructor() {
        super();
        this.calculateSalary = this.calculateSalary.bind(this);
        this.calcHourlyRate = this.calcHourlyRate.bind(this);
        this.state = {
            noOfTreatments: 0,
            sumSalary: 0,
            sumTreatments: 0,
            expenses: 0,
            salaryPart: 0,
            hourlyRate: 0,
        }
    }

    componentDidMount() {

    }

    calculateSalary(value) {
        debugger;
        console.log(this.state.noOfTreatments);
    }

    calcHourlyRate() {
        debugger;
        return this.state.noOfTreatments * 2;
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value },
            () => {
                this.setState({hourlyRate: this.state.noOfTreatments * 2})
            })
    }

    render() {
        return (
            <div className="content">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Állítsd be az óraszámokat</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col>
                                        Áron
                                    </Col>
                                    <Col>
                                        <input
                                            type="number"
                                            name="noOfTreatments"
                                            onChange={this.onChange}
                                            value={this.state.noOfTreatments}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Összes fizetés
                                    </Col>
                                    <Col>
                                        <input
                                            type="number"
                                            name="sumSalary"
                                            onChange={this.onChange}
                                            value={this.state.sumSalary}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Összes kezelés
                                    </Col>
                                    <Col>
                                        <input
                                            type="number"
                                            name="sumTreatments"
                                            onChange={this.onChange}
                                            value={this.state.sumTreatments}
                                            disabled={true}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Rezsi
                                    </Col>
                                    <Col>
                                        <input
                                            type="number"
                                            name="expenses"
                                            onChange={this.onChange}
                                            value={this.state.expenses}
                                            disabled={true}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Kezelői rész
                                    </Col>
                                    <Col>
                                        <input
                                            type="number"
                                            name="salaryPart"
                                            onChange={this.onChange}
                                            value={this.state.salaryPart}
                                            disabled={true}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        Órabér
                                    </Col>
                                    <Col>
                                        <input
                                            type="number"
                                            name="hourlyRate"
                                            onChange={this.onChange}
                                            value={this.state.hourlyRate}
                                            disabled={true}/>
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SalaryCalc;
