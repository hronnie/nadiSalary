import React from "react";
import BankNote from "./components/BankNote/BankNote";
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Row,
    Col
} from "reactstrap";
import Treatment from "./components/Treatment/Treatment";
import Salary from "./components/Salary/Salary";



class SalaryCalc extends React.Component {
    constructor() {
        super();
        // this.calculateSalary = this.calculateSalary.bind(this);
        // this.calcAndSetHourlyRate = this.calcAndSetHourlyRate.bind(this);
        this.state = {
            //noOfTreatments: 0,
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
                anita: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday: 0,
                    sunday: 0,
                },
                aron: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday: 0,
                    sunday: 0,
                },
                barbi: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday: 0,
                    sunday: 0,
                },
                beriZsuzsi: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday: 0,
                    sunday: 0,
                },
                hajni: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday: 0,
                    sunday: 0,
                },
                reni: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday: 0,
                    sunday: 0,
                },
                tomi: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday: 0,
                    sunday: 0,
                },
                vera: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday: 0,
                    sunday: 0,
                },
                mZsuzsi: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday: 0,
                    sunday: 0,
                },
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

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }


    async recalculateSalary() {
        await this.calcAndSetSumTreatments();
        await this.calcAndSetSumIncome();
        await this.calcAndSetHourlyRate();
        await this.calcAndSetExpenses();
        await this.calcAndSalaryPart();
        await this.calcAndSetSalaries();
    }

    async calcAndSetSumTreatments() {
        let sumTreatmentValue = 0;
        Object.values(this.state.treatments).forEach(treatmentsByName => {
            Object.values(treatmentsByName).forEach(treatmentsValue => {
                sumTreatmentValue += treatmentsValue;
            });
        });
        await this.setStateAsync({sumTreatments: sumTreatmentValue});
    }

    async calcAndSetHourlyRate() {
        if (!this.state.salaryPart || this.state.salaryPart === 0) {
            return;
        }
        await this.setStateAsync({hourlyRate: Math.round(this.state.salaryPart / this.state.sumTreatments)});
    }

    async calcAndSetExpenses() {
        await this.setStateAsync({expenses: this.state.sumIncome * 0.2});
    }

    async calcAndSalaryPart() {
        await this.setStateAsync({salaryPart: this.state.sumIncome * 0.8});
    }

    async calcAndSetSumIncome() {
        let sum = 0;
        sum += this.state.banknote.fifty * 50;
        sum += this.state.banknote.hundred * 100;
        sum += this.state.banknote.twoHundred * 200;
        sum += this.state.banknote.fiveHundred * 500;
        sum += this.state.banknote.thousand * 1000;
        sum += this.state.banknote.twoThousand * 2000;
        sum += this.state.banknote.fiveThousand * 5000;
        sum += this.state.banknote.tenThousand * 10000;
        sum += this.state.banknote.twentyThousand * 20000;
        await this.setStateAsync({sumIncome: sum});
    }

    async calcAndSetSalaries() {
        let salaries = this.state.salaries;
        Object.keys(this.state.treatments).forEach(name => {
            let sumSalaryPerPerson = 0;
            Object.values(this.state.treatments[name]).forEach(treatmentPerDay => {
                sumSalaryPerPerson += treatmentPerDay;
            });
            salaries[name] = sumSalaryPerPerson * this.state.hourlyRate;
        })
        await this.setStateAsync({salaries: salaries});
    }


    onChange = e => {
        this.setState({[e.target.name]: e.target.value},
            () => {
                this.recalculateSalary();
            });
    }

    onChangeNoOfTreatment = (personName, person) => e => {
        let treatments = this.state.treatments;
        treatments[person][e.target.name] = Number.parseInt(e.target.value);
        this.setState({treatments},
            () => {
                this.recalculateSalary();
            })
    }

    onChangeBankNote = e => {
        let banknote = this.state.banknote;
        banknote[e.target.name] = e.target.value;
        this.setState({banknote},
            () => {
                this.recalculateSalary();
            })
    }

    calcSumPersonTreatmentHours(name) {
        let sumSalaryTreatmentPerPerson = 0;
        Object.values(this.state.treatments[name]).forEach(treatmentPerDay => {
            sumSalaryTreatmentPerPerson += treatmentPerDay;
        });
        return sumSalaryTreatmentPerPerson;
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
                                    <Treatment
                                        personName="Anita"
                                        person="anita"
                                        treatments={this.state.treatments.anita}
                                        onChange={this.onChangeNoOfTreatment}
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Áron"
                                        person="aron"
                                        treatments={this.state.treatments.aron}
                                        onChange={this.onChangeNoOfTreatment}
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Barbi"
                                        person="barbi"
                                        treatments={this.state.treatments.barbi}
                                        onChange={this.onChangeNoOfTreatment}
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Budai Zsuzsi"
                                        person="beriZsuzsi"
                                        treatments={this.state.treatments.beriZsuzsi}
                                        onChange={this.onChangeNoOfTreatment}
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Hajni"
                                        person="hajni"
                                        treatments={this.state.treatments.hajni}
                                        onChange={this.onChangeNoOfTreatment}
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Reni"
                                        person="reni"
                                        treatments={this.state.treatments.reni}
                                        onChange={this.onChangeNoOfTreatment}
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Tomi"
                                        person="tomi"
                                        treatments={this.state.treatments.tomi}
                                        onChange={this.onChangeNoOfTreatment}
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Vera"
                                        person="vera"
                                        treatments={this.state.treatments.vera}
                                        onChange={this.onChangeNoOfTreatment}
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Máté Zsuzsi"
                                        person="mZsuzsi"
                                        treatments={this.state.treatments.mZsuzsi}
                                        onChange={this.onChangeNoOfTreatment}
                                    />
                                </Row>
                                <hr/>
                                <Row>
                                    <Col>
                                        Összes fizetés
                                    </Col>
                                    <Col>
                                        <input
                                            type="number"
                                            name="sumIncome"
                                            onChange={this.onChange}
                                            value={this.state.sumIncome}
                                            disabled={true}/>
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
                                <hr/>
                                <Row>
                                    <Col>
                                        <Salary
                                            label={"Anita"}
                                            personSalary={this.state.salaries.anita}
                                            sumPersonTreatmentHours={this.calcSumPersonTreatmentHours('anita')}/>
                                    </Col>
                                    <Col>
                                        <Salary
                                            label={"Áron"}
                                            personSalary={this.state.salaries.aron}
                                            sumPersonTreatmentHours={this.calcSumPersonTreatmentHours('aron')}/>
                                    </Col>
                                    <Col>
                                        <Salary
                                            label={"Barbi"}
                                            personSalary={this.state.salaries.barbi}
                                            sumPersonTreatmentHours={this.calcSumPersonTreatmentHours('barbi')}/>
                                    </Col>
                                    <Col>
                                        <Salary
                                            label={"Budai Zsuzsi"}
                                            personSalary={this.state.salaries.beriZsuzsi}
                                            sumPersonTreatmentHours={this.calcSumPersonTreatmentHours('beriZsuzsi')}/>
                                    </Col>
                                    <Col>
                                        <Salary
                                            label={"Hajni"}
                                            personSalary={this.state.salaries.hajni}
                                            sumPersonTreatmentHours={this.calcSumPersonTreatmentHours('hajni')}/>
                                    </Col>
                                    <Col>
                                        <Salary
                                            label={"Reni"}
                                            personSalary={this.state.salaries.reni}
                                            sumPersonTreatmentHours={this.calcSumPersonTreatmentHours('reni')}/>
                                    </Col>
                                    <Col>
                                        <Salary
                                            label={"Tomi"}
                                            personSalary={this.state.salaries.tomi}
                                            sumPersonTreatmentHours={this.calcSumPersonTreatmentHours('tomi')}/>
                                    </Col>
                                    <Col>
                                        <Salary
                                            label={"Vera"}
                                            personSalary={this.state.salaries.vera}
                                            sumPersonTreatmentHours={this.calcSumPersonTreatmentHours('vera')}/>
                                    </Col>
                                    <Col>
                                        <Salary
                                            label={"Máté Zsuzsi"}
                                            personSalary={this.state.salaries.mZsuzsi}
                                            sumPersonTreatmentHours={this.calcSumPersonTreatmentHours('mZsuzsi')}/>
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
