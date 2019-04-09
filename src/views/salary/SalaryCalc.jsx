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
        // this.calculateSalary = this.calculateSalary.bind(this);
        // this.calcHourlyRate = this.calcHourlyRate.bind(this);
        this.state = {
            noOfTreatments: 0,
            sumIncome: 0,
            sumTreatments: 0,
            expenses: 0,
            salaryPart: 0,
            hourlyRate: 0,
            banknote: {
                fifty: 0,
                hundred: 0,
                twoHundred: 0,
                fiveHundred: 0,
                thousand: 0,
                twoThousand: 0,
                fiveThousand: 0,
                tenThousand: 0,
                twentyThousand: 0,
            }
        }
    }

    componentDidMount() {

    }


    calcSumIncome(banknote) {
        let sum = 0;
        sum += banknote.fifty * 50;
        sum += banknote.hundred * 100;
        sum += banknote.twoHundred * 200;
        sum += banknote.fiveHundred * 500;
        sum += banknote.thousand * 1000;
        sum += banknote.twoThousand * 2000;
        sum += banknote.fiveThousand * 5000;
        sum += banknote.tenThousand * 10000;
        sum += banknote.twentyThousand * 20000;
        return sum;
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    onChangeBankNote = e => {
        let banknote = this.state.banknote;
        banknote[e.target.name] = e.target.value;
        this.setState({banknote},
            () => {
                this.setState({sumIncome: this.calcSumIncome(this.state.banknote)})
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
                                    <Col md={3}>
                                        <Row>
                                            <label>50 forintosok</label>
                                        </Row>
                                        <Row>
                                            <input
                                                type="number"
                                                name="fifty"
                                                onChange={this.onChangeBankNote}
                                                value={this.state.banknote.fifty}/>
                                        </Row>
                                    </Col>
                                    <Col md={3}>
                                        <Row>
                                            <label>100 forintosok</label>
                                        </Row>
                                        <Row>
                                            <input
                                                type="number"
                                                name="hundred"
                                                onChange={this.onChangeBankNote}
                                                value={this.state.banknote.hundred}/>
                                        </Row>
                                    </Col>
                                    <Col md={3}>
                                        <Row>
                                            <label>200 forintosok</label>
                                        </Row>
                                        <Row>
                                            <input
                                                type="number"
                                                name="twoHundred"
                                                onChange={this.onChangeBankNote}
                                                value={this.state.banknote.twoHundred}/>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <Row>
                                            <label>500 forintosok</label>
                                        </Row>
                                        <Row>
                                            <input
                                                type="number"
                                                name="fiveHundred"
                                                onChange={this.onChangeBankNote}
                                                value={this.state.banknote.fiveHundred}/>
                                        </Row>
                                    </Col>
                                    <Col md={3}>
                                        <Row>
                                            <label>1000 forintosok</label>
                                        </Row>
                                        <Row>
                                            <input
                                                type="number"
                                                name="thousand"
                                                onChange={this.onChangeBankNote}
                                                value={this.state.banknote.thousand}/>
                                        </Row>
                                    </Col>
                                    <Col md={3}>
                                        <Row>
                                            <label>2000 forintosok</label>
                                        </Row>
                                        <Row>
                                            <input
                                                type="number"
                                                name="twoThousand"
                                                onChange={this.onChangeBankNote}
                                                value={this.state.banknote.twoThousand}/>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <Row>
                                            <label>5000 forintosok</label>
                                        </Row>
                                        <Row>
                                            <input
                                                type="number"
                                                name="fiveThousand"
                                                onChange={this.onChangeBankNote}
                                                value={this.state.banknote.fiveThousand}/>
                                        </Row>
                                    </Col>
                                    <Col md={3}>
                                        <Row>
                                            <label>10000 forintosok</label>
                                        </Row>
                                        <Row>
                                            <input
                                                type="number"
                                                name="tenThousand"
                                                onChange={this.onChangeBankNote}
                                                value={this.state.banknote.tenThousand}/>
                                        </Row>
                                    </Col>
                                    <Col md={3}>
                                        <Row>
                                            <label>20000 forintosok</label>
                                        </Row>
                                        <Row>
                                            <input
                                                type="number"
                                                name="twentyThousand"
                                                onChange={this.onChangeBankNote}
                                                value={this.state.banknote.twentyThousand}/>
                                        </Row>
                                    </Col>
                                </Row>
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
                                            name="sumIncome"
                                            onChange={this.onChange}
                                            value={this.state.sumIncome}/>
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
