import React from "react";
import BankNote from "./BankNote/BankNote";
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Row,
    Col
} from "reactstrap";

//import BankNote from '../../components/BankNote/BankNote.jsx';

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
            },
            treatments: {
                anita: 0,
                aron: 0,
                barbi: 0,
                beriZsuzsi: 0,
                hajni: 0,
                reni: 0,
                tomi: 0,
                vera: 0,
                mZsuzsi: 0
            },
            salaries: {
                anita: 0,
                aron: 0,
                barbi: 0,
                beriZsuzsi: 0,
                hajni: 0,
                reni: 0,
                tomi: 0,
                vera: 0,
                mZsuzsi: 0
            },
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

    onChangeTreatments = e => {
        let treatments = this.state.treatments;
        treatments[e.target.name] = e.target.value;
        this.setState({treatments},
            () => {
                let sumIncome = this.calcSumIncome(this.state.banknote);
                this.setState({sumIncome: sumIncome,
                    expenses: sumIncome * 0.2,
                    salaryPart: sumIncome * 0.8})
            })
    }

    onChangeBankNote = e => {
        let banknote = this.state.banknote;
        banknote[e.target.name] = e.target.value;
        this.setState({banknote},
            () => {
                let sumIncome = this.calcSumIncome(this.state.banknote);
                this.setState({sumIncome: sumIncome,
                                    expenses: sumIncome * 0.2,
                                    salaryPart: sumIncome * 0.8})
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
                                        <BankNote
                                            banknoteValue={this.state.banknote.fifty}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='fifty'
                                            label="50 forintosok"
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <BankNote
                                            banknoteValue={this.state.banknote.hundred}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='hundred'
                                            label="100 forintosok"
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <BankNote
                                            banknoteValue={this.state.banknote.twoHundred}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='twoHundred'
                                            label="200 forintosok"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <BankNote
                                            banknoteValue={this.state.banknote.fiveHundred}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='fiveHundred'
                                            label="500 forintosok"
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <BankNote
                                            banknoteValue={this.state.banknote.thousand}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='thousand'
                                            label="1000 forintosok"
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <BankNote
                                            banknoteValue={this.state.banknote.twoThousand}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='twoThousand'
                                            label="2000 forintosok"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <BankNote
                                            banknoteValue={this.state.banknote.fiveThousand}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='fiveThousand'
                                            label="5000 forintosok"
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <BankNote
                                            banknoteValue={this.state.banknote.tenThousand}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='tenThousand'
                                            label="10000 forintosok"
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <BankNote
                                            banknoteValue={this.state.banknote.twentyThousand}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='twentyThousand'
                                            label="20000 forintosok"
                                        />
                                    </Col>
                                </Row>
                                <hr/>
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
