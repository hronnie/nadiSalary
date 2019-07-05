import React from "react";
import BankNote from "./components/BankNote/BankNote";
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Button,
    Row,
    Col,
} from "reactstrap";
import Treatment from "./components/Treatment/Treatment";
import { Calendar } from 'react-date-range';
import ReactToPrint from 'react-to-print';
import Report from "./components/Report/Report";

class SalaryCalc extends React.Component {

    constructor() {
        super();
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.calcSumPersonTreatmentHours = this.calcSumPersonTreatmentHours.bind(this);
        this.state = {
            sumIncome: 0,
            sumTreatments: 0,
            expenses: 0,
            salaryPart: 0,
            hourlyRate: 0,
            startDate: new Date(),
            endDate: new Date(),
            banknote: {
                five: 0,
                ten: 0,
                twenty: 0,
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
                gabor: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday: 0,
                    sunday: 0,
                },
                gergo: {
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
                gabor: 0,
                gergo: 0,
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
        await this.calcAndSetExpenses();
        await this.calcAndSalaryPart();
        await this.calcAndSetHourlyRate();
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
        sum += this.state.banknote.five * 5;
        sum += this.state.banknote.ten * 10;
        sum += this.state.banknote.twenty * 20;
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

    onChangeNoOfTreatment = (value, personName, name) => {
        let treatments = this.state.treatments;
        treatments[personName][name] = Number.parseInt(value);
        this.setState({treatments});
    }

    onChangeBankNote =  (value, name) => {
        let banknote = this.state.banknote;
        banknote[name] = value;
        this.setState({banknote});
    }

    calcSumPersonTreatmentHours(name) {
        let sumSalaryTreatmentPerPerson = 0;
        Object.values(this.state.treatments[name]).forEach(treatmentPerDay => {
            sumSalaryTreatmentPerPerson += treatmentPerDay;
        });
        return sumSalaryTreatmentPerPerson;
    }

    handleStartDateChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleEndDateChange(date) {
        this.setState({
            endDate: date
        });
    }


    render() {
        return (
            <div className="content">
                <Row>
                    <Col>
                        <h1>Fizetés kalkulátor</h1>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Hogyan kezdj hozzá?</CardTitle>
                            </CardHeader>
                            <CardBody className="salaryTable">
                                <Row>
                                    <ul>
                                        <li>Gyűjtsd be mindkét helyről a bevételt:</li>
                                        <li>Gyűjtsd külön a bankjegyeket és az érméket</li>
                                    </ul>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Állítsd be az elszámolt időszakot</CardTitle>
                            </CardHeader>
                            <CardBody className="salaryTable">
                                <Row>
                                    <Col md={3}>
                                        <strong>Ettől:</strong>
                                        <Calendar
                                            date={this.state.startDate}
                                            onChange={this.handleStartDateChange}
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <strong>Eddig:</strong>
                                        <Calendar
                                            date={this.state.endDate}
                                            onChange={this.handleEndDateChange}
                                        />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                       <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Állítsd be a bankjegyeket</CardTitle>
                            </CardHeader>
                            <CardBody className="salaryTable">
                                <Row>
                                    <Col md={3}>
                                        <BankNote
                                            banknoteValue={this.state.banknote.five}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='five'
                                            label="5 forintosok"
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <BankNote
                                            banknoteValue={this.state.banknote.ten}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='ten'
                                            label="10 forintosok"
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <BankNote
                                            banknoteValue={this.state.banknote.twenty}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='twenty'
                                            label="20 forintosok"
                                        />
                                    </Col>
                                </Row>
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
                                            label="1.000 forintosok"
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <BankNote
                                            banknoteValue={this.state.banknote.twoThousand}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='twoThousand'
                                            label="2.000 forintosok"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <BankNote
                                            banknoteValue={this.state.banknote.fiveThousand}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='fiveThousand'
                                            label="5.000 forintosok"
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <BankNote
                                            banknoteValue={this.state.banknote.tenThousand}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='tenThousand'
                                            label="10.000 forintosok"
                                        />
                                    </Col>
                                    <Col md={3}>
                                        <BankNote
                                            banknoteValue={this.state.banknote.twentyThousand}
                                            onChangeBankNote={this.onChangeBankNote}
                                            name='twentyThousand'
                                            label="20.000 forintosok"
                                        />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Állítsd be az kezelések számát</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Treatment
                                        personName="Anita"
                                        person="anita"
                                        treatments={this.state.treatments.anita}
                                        onChange={this.onChangeNoOfTreatment}
                                        color="#99ff66"
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Áron"
                                        person="aron"
                                        treatments={this.state.treatments.aron}
                                        onChange={this.onChangeNoOfTreatment}
                                        color="#cc33ff"
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Barbi"
                                        person="barbi"
                                        treatments={this.state.treatments.barbi}
                                        onChange={this.onChangeNoOfTreatment}
                                        color="#ff00ff"
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Budai Zsuzsi"
                                        person="beriZsuzsi"
                                        treatments={this.state.treatments.beriZsuzsi}
                                        onChange={this.onChangeNoOfTreatment}
                                        color="#FF0000"
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Gábor"
                                        person="gabor"
                                        treatments={this.state.treatments.gabor}
                                        onChange={this.onChangeNoOfTreatment}
                                        color="#f49e42"
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Gergő"
                                        person="gergo"
                                        treatments={this.state.treatments.gergo}
                                        onChange={this.onChangeNoOfTreatment}
                                        color="white"
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Hajni"
                                        person="hajni"
                                        treatments={this.state.treatments.hajni}
                                        onChange={this.onChangeNoOfTreatment}
                                        color="#33cc33"
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Reni"
                                        person="reni"
                                        treatments={this.state.treatments.reni}
                                        onChange={this.onChangeNoOfTreatment}
                                        color="#ffff00"
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Tomi"
                                        person="tomi"
                                        treatments={this.state.treatments.tomi}
                                        onChange={this.onChangeNoOfTreatment}
                                        color="#0066ff"
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Vera"
                                        person="vera"
                                        treatments={this.state.treatments.vera}
                                        onChange={this.onChangeNoOfTreatment}
                                        color="#ff5050"
                                    />
                                </Row>
                                <Row>
                                    <Treatment
                                        personName="Máté Zsuzsi"
                                        person="mZsuzsi"
                                        treatments={this.state.treatments.mZsuzsi}
                                        onChange={this.onChangeNoOfTreatment}
                                        color="#66ccff"
                                    />
                                </Row>
                                <hr/>
                                <Button onClick={() => this.recalculateSalary()}>Kiszámol</Button>

                            </CardBody>
                        </Card>
                        <Report ref={el => (this.componentRef = el)}
                                sumIncome={this.state.sumIncome}
                                sumTreatments={this.state.sumTreatments}
                                expenses={this.state.expenses}
                                salaryPart={this.state.salaryPart}
                                hourlyRate={this.state.hourlyRate}

                                salaries={this.state.salaries}
                                treatments={this.state.treatments}
                                calcSumPersonTreatmentHours={this.calcSumPersonTreatmentHours}
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                        />
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Összegzés nyomtatása</CardTitle>
                            </CardHeader>
                            <CardBody className="salaryTable">
                                <ReactToPrint
                                    trigger={() => <a href="#" style={{"font-size": "23px", "cursor":"pointer"}}><i className="nc-icon nc-paper"></i> Összegzés nyomtatása</a>}
                                    content={() => this.componentRef}
                                />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SalaryCalc;
