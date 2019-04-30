import React from "react";
import {
    Card, CardBody, CardHeader, CardTitle, Col, Row,
} from "reactstrap";
import NumberFormat from "../SalaryCalc";

class Sums extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Összesités</CardTitle>
                    </CardHeader>
                    <CardBody  className="salaryTable">
                        <Row>
                            <Col>
                                Összes fizetés
                            </Col>
                            <Col>
                                Összes kezelés
                            </Col>
                            <Col>
                                Rezsi
                            </Col>
                            <Col>
                                Kezelői rész
                            </Col>
                            <Col>
                                Órabér
                            </Col>
                        </Row>
                            <Row>
                                <Col>
                                    <NumberFormat
                                        value={this.props.sumIncome}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={' Ft'}/>
                                </Col>
                                <Col>
                                    <NumberFormat
                                        value={this.props.sumTreatments}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={' db'}/>
                                </Col>
                                <Col>
                                    <NumberFormat
                                        value={this.props.expenses}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={' Ft'}/>
                                </Col>
                                <Col>
                                    <NumberFormat
                                        value={this.props.salaryPart}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={' Ft'}/>
                                </Col>
                                <Col>
                                    <NumberFormat
                                        value={this.props.hourlyRate}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        suffix={' Ft'}/>
                                </Col>

                            </Row>
                    </CardBody>
                </Card>

            </div>
        )
    }
}

export default Sums;