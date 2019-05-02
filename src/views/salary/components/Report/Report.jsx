import React from "react";
import SalarySums from "../SalarySums/SalarySums";
import Sums from "../Sums/Sums";
import {
    Card, CardBody, CardHeader, CardTitle
} from "reactstrap";
import Moment from 'react-moment';

class Report extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle tag="h4">Elszámolt időszak</CardTitle>
                    </CardHeader>
                    <CardBody>
                        Kezdet: <Moment format="YYYY.MM.DD">{this.props.startDate}</Moment>  ---
                        Vége: <Moment format="YYYY.MM.DD">{this.props.endDate}</Moment>
                    </CardBody>
                </Card>
                <Sums sumIncome={this.props.sumIncome}
                      sumTreatments={this.props.sumTreatments}
                      expenses={this.props.expenses}
                      salaryPart={this.props.salaryPart}
                      hourlyRate={this.props.hourlyRate}
                />
                <SalarySums
                    salaries={this.props.salaries}
                    treatments={this.props.treatments}
                    calcSumPersonTreatmentHours={this.props.calcSumPersonTreatmentHours}
                />
            </div>
        )
    }
}

export default Report;