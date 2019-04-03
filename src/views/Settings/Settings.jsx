import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col, Alert
} from "reactstrap";

import {Button} from "react-bootstrap";
import {EXCEL_URL_STORAGE_KEY} from "../salary/SalaryCalc";

class Settings extends React.Component {
    constructor() {
        super();
        this.onDismiss = this.onDismiss.bind(this);
        this.saveXlsUrl = this.saveXlsUrl.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            saveUrlActionMessageVisible: false,
            sheetDataReady: false,
            xlsUrl: ''
        }
    }

    onDismiss() {
        this.setState({saveUrlActionMessageVisible: false});
    }

    saveXlsUrl = (e) => {
        localStorage.setItem(EXCEL_URL_STORAGE_KEY, this.state.xlsUrl);
        this.setState({saveUrlActionMessageVisible: true});
    }

    handleChange = (e) => {
        this.setState({xlsUrl: e.target.value});
    }


    render() {
        return (
            <div className="content">
                <Row>
                    <Col xs={12}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Excel Url beállítás</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <input type="text"  style={{ width: '90%' }} onChange={this.handleChange}/>
                                {/*<input type="text" value={this.state.xlsUrl} placeholder="Másold be az excel url-jét" />*/}
                                <div>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td><Button onClick={this.saveXlsUrl} >Link elmentése</Button></td>
                                            <td>
                                                <Alert
                                                    color="success"
                                                    isOpen={this.state.saveUrlActionMessageVisible}
                                                    toggle={this.onDismiss}
                                                >
                                                    A megadott URL-t elmentettem.
                                                </Alert>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </CardBody>

                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Settings;
