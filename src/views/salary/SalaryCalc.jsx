import React from "react";
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Row,
    Col, Alert
} from "reactstrap";

import Tabletop from 'tabletop';
import {Form, Button} from "react-bootstrap";
import moment from 'moment';
import { AgGridReact } from 'ag-grid-react';


export const FIELD_NAMES = {
    name: 'Név',
    email: 'Email',
    levelOne: '1',
    levelTwo: '2',
    levelThree: '3AB',
    levelFourA: '4A',
    levelFourB: '4B',
    levelFive: '5',
    levelSix: '6',
    levelSeven: '7',
    tk1: 'Tk1',
    tk2: 'Tk2',
    tk3: 'Tk3',
    tk4: 'Tk4',
    disabledStudent: 'Email tiltás',
    archive: 'Archív',
}

export const LEVEL_FILTERS = {
    LEVEL_ALL: 'levelAll',
    LEVEL_ONE: 'levelOne',
    LEVEL_TWO: 'levelTwo',
    LEVEL_THREE: 'levelThree',
    LEVEL_FOUR_A: 'levelFourA',
    LEVEL_FOUR_B: 'levelFourB',
    LEVEL_FIVE: 'levelFive',
    LEVEL_SIX: 'levelSix',
    LEVEL_SEVEN: 'levelSeven',
    TK1: 'levelTk1',
    TK2: 'levelTk2',
    TK3: 'levelTk3',
    TK4: 'levelTk4',
}

export const LEVEL_WAITING_TIMES = {
    LEVEL_TWO: 90,
    LEVEL_THREE: 180,
    LEVEL_FOUR_A: 180,
    LEVEL_FOUR_B: 90,
    LEVEL_FIVE: 90,
    LEVEL_SIX: 180,
    LEVEL_SEVEN: 365,
}

export const DATE_FORMAT = 'LL';
export const EMPTY_DATE_FILLER = '---';
export const EXCEL_URL_STORAGE_KEY = 'excelUrlKey';

class SalaryCalc extends React.Component {
    constructor() {
        super();
        this.onDismiss = this.onDismiss.bind(this);
        this.state = {
            levelChosen: false,
            copyActionMessageVisible: false,
            sheetDataReady: false,
            levelEmailAddressList: [],
            origData: [],
            data: [],
            levelFilter: LEVEL_FILTERS.LEVEL_ALL,
            columnDefs: [
                {headerName: "Név", field: FIELD_NAMES.name, width: 150},
                {headerName: "Email", field: FIELD_NAMES.email},
                {headerName: "1-es tanfolyam", field: FIELD_NAMES.levelOne, width: 140, cellRenderer: (data) => {
                        return this.formatLevelDate(data);
                    }},
                {headerName: "2-es tanfolyam", field: FIELD_NAMES.levelTwo, width: 140, cellRenderer: (data) => {
                        return this.formatLevelDate(data);
                    }},
                {headerName: "3-as tanfolyam", field: FIELD_NAMES.levelThree, width: 140, cellRenderer: (data) => {
                        return this.formatLevelDate(data);
                    }},
                {headerName: "4A - Csipi tanfolyam", field: FIELD_NAMES.levelFourA, width: 140, cellRenderer: (data) => {
                        return this.formatLevelDate(data);
                    }},
                {headerName: "4B - Csonti tanfolyam", field: FIELD_NAMES.levelFourB, width: 140, cellRenderer: (data) => {
                        return this.formatLevelDate(data);
                    }},
                {headerName: "5-ös tanfolyam", field: FIELD_NAMES.levelFive, width: 140, cellRenderer: (data) => {
                        return this.formatLevelDate(data);
                    }},
                {headerName: "6-os tanfolyam", field: FIELD_NAMES.levelSix, width: 140, cellRenderer: (data) => {
                        return this.formatLevelDate(data);
                    }},
                {headerName: "7-es tanfolyam", field: FIELD_NAMES.levelSeven, width: 140, cellRenderer: (data) => {
                        return this.formatLevelDate(data);
                    }},
                {headerName: "TK 1", field: FIELD_NAMES.tk1, width: 140, cellRenderer: (data) => {
                        return this.formatLevelDate(data);
                    }},
                {headerName: "TK 2", field: FIELD_NAMES.tk2, width: 140, cellRenderer: (data) => {
                        return this.formatLevelDate(data);
                    }},
                {headerName: "TK 3", field: FIELD_NAMES.tk3, width: 140, cellRenderer: (data) => {
                        return this.formatLevelDate(data);
                    }},
                {headerName: "TK 4", field: FIELD_NAMES.tk4, width: 140, cellRenderer: (data) => {
                        return this.formatLevelDate(data);
                    }},
            ],
            overlayNoRowsTemplate:
                "<span style=\"padding: 10px; #444; background: lightgoldenrodyellow;\">" +
                "Kérlek várj, mert most importálom az egész excel fájlt, ami eltarthat 10-20 másodpercig a fálj nagyságától függően" +
                "<br><br>Mielőtt ezt az oldalt használod, kérlek állítsd be az excel fájl url-jét a Beállítások menüpontban" +
                "</span>"
        }
    }

    onDismiss() {
        this.setState({copyActionMessageVisible: false});
    }

    formatLevelDate(data) {
        let levelDate = moment(data.value);
        return levelDate.isValid() ? levelDate.format(DATE_FORMAT) : EMPTY_DATE_FILLER
    }

    isFormatLevelDateValid(dateValue) {
        let levelDate = moment(dateValue);
        return levelDate.isValid();
    }

    componentDidMount() {
        Tabletop.init({
            key: localStorage.getItem(EXCEL_URL_STORAGE_KEY),
            callback: googleData => {
                this.setState({
                    data: googleData,
                    origData: googleData,
                    sheetDataReady: true,
                    overlayNoRowsTemplate: "Nincs olyan tanítvány, aki megfelel a feltételnek."
                })
            },
            simpleSheet: true
        })
    }

    levelChanged(event) {
        this.filterDataByLevel(event.target.value);
        this.setState({ levelFilter: event.target.value });
    }

    isWaitingTimeOk(levelCompletedDate, waitingTime) {
        let currentDate = new moment();
        let formattedLevelCompletedDate = moment(levelCompletedDate);
        if (currentDate.diff(formattedLevelCompletedDate, 'days') >= waitingTime) {
            return true;
        }
        return false;
    }

    filterDataByLevel(level) {
        let newData;
        switch (level) {
            case LEVEL_FILTERS.LEVEL_ALL: {
                newData = this.state.origData;
                break;
            }
            case LEVEL_FILTERS.LEVEL_TWO: {
                newData = this.state.origData.filter(item => {
                    return this.isFormatLevelDateValid(item[FIELD_NAMES.levelOne])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelTwo])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelThree])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelFourA])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelFourB])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelFive])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelSix])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelSeven])
                        && this.isWaitingTimeOk(item[FIELD_NAMES.levelOne], LEVEL_WAITING_TIMES.LEVEL_TWO)
                        && item[FIELD_NAMES.archive] !== '1'
                        && item[FIELD_NAMES.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.LEVEL_THREE: {
                newData = this.state.origData.filter(item => {
                    return this.isFormatLevelDateValid(item[FIELD_NAMES.levelOne])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelTwo])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelThree])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelFourA])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelFourB])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelFive])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelSix])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelSeven])
                        && this.isWaitingTimeOk(item[FIELD_NAMES.levelTwo], LEVEL_WAITING_TIMES.LEVEL_THREE)
                        && item[FIELD_NAMES.archive] !== '1'
                        && item[FIELD_NAMES.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.LEVEL_FOUR_A: {
                newData = this.state.origData.filter(item => {
                    return this.isFormatLevelDateValid(item[FIELD_NAMES.levelOne])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelTwo])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelThree])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelFourA])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelFourB])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelFive])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelSix])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelSeven])
                        && this.isWaitingTimeOk(item[FIELD_NAMES.levelThree], LEVEL_WAITING_TIMES.LEVEL_FOUR_A)
                        && item[FIELD_NAMES.archive] !== '1'
                        && item[FIELD_NAMES.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.LEVEL_FOUR_B: {
                newData = this.state.origData.filter(item => {
                    return this.isFormatLevelDateValid(item[FIELD_NAMES.levelOne])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelTwo])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelThree])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelFourA])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelFourB])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelFive])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelSix])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelSeven])
                        && this.isWaitingTimeOk(item[FIELD_NAMES.levelFourA], LEVEL_WAITING_TIMES.LEVEL_FOUR_B)
                        && item[FIELD_NAMES.archive] !== '1'
                        && item[FIELD_NAMES.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.LEVEL_FIVE: {
                newData = this.state.origData.filter(item => {
                    return this.isFormatLevelDateValid(item[FIELD_NAMES.levelOne])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelTwo])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelThree])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelFourA])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelFourB])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelFive])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelSix])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelSeven])
                        && this.isWaitingTimeOk(item[FIELD_NAMES.levelFourB], LEVEL_WAITING_TIMES.LEVEL_FIVE)
                        && item[FIELD_NAMES.archive] !== '1'
                        && item[FIELD_NAMES.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.LEVEL_SIX: {
                newData = this.state.origData.filter(item => {
                    return this.isFormatLevelDateValid(item[FIELD_NAMES.levelOne])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelTwo])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelThree])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelFourA])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelFourB])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelFive])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelSix])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelSeven])
                        && this.isWaitingTimeOk(item[FIELD_NAMES.levelFive], LEVEL_WAITING_TIMES.LEVEL_SIX)
                        && item[FIELD_NAMES.archive] !== '1'
                        && item[FIELD_NAMES.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.LEVEL_SEVEN: {
                newData = this.state.origData.filter(item => {
                    return this.isFormatLevelDateValid(item[FIELD_NAMES.levelOne])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelTwo])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelThree])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelFourA])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelFourB])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelFive])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.levelSix])
                        && !this.isFormatLevelDateValid(item[FIELD_NAMES.levelSeven])
                        && this.isWaitingTimeOk(item[FIELD_NAMES.levelSix], LEVEL_WAITING_TIMES.LEVEL_SEVEN)
                        && item[FIELD_NAMES.archive] !== '1'
                        && item[FIELD_NAMES.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.TK1: {
                newData = this.state.origData.filter(item => {
                    return this.isFormatLevelDateValid(item[FIELD_NAMES.levelThree])
                        && item[FIELD_NAMES.archive] !== '1'
                        && item[FIELD_NAMES.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.TK2: {
                newData = this.state.origData.filter(item => {
                    return this.isFormatLevelDateValid(item[FIELD_NAMES.levelFive])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.tk1])
                        && item[FIELD_NAMES.archive] !== '1'
                        && item[FIELD_NAMES.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.TK3: {
                newData = this.state.origData.filter(item => {
                    return this.isFormatLevelDateValid(item[FIELD_NAMES.levelSix])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.tk2])
                        && item[FIELD_NAMES.archive] !== '1'
                        && item[FIELD_NAMES.disabledStudent] !== '1';
                })
                break;
            }
            case LEVEL_FILTERS.TK4: {
                newData = this.state.origData.filter(item => {
                    return this.isFormatLevelDateValid(item[FIELD_NAMES.levelSeven])
                        && this.isFormatLevelDateValid(item[FIELD_NAMES.tk3])
                        && item[FIELD_NAMES.archive] !== '1'
                        && item[FIELD_NAMES.disabledStudent] !== '1';
                })
                break;
            }
            default: {
                newData = this.state.origData;
                break;
            }
        }
        this.setState({levelEmailAddressList: newData.map(item => {
                if (item[FIELD_NAMES.email] !== undefined && item[FIELD_NAMES.email] !== null && item[FIELD_NAMES.email] !== '') {
                    return item[FIELD_NAMES.email];
                }
            }),
                            data: newData,
                            levelChosen: true});
    }

    copyToClipboard = (e) => {
        this.textArea.select();
        document.execCommand('copy');
        e.target.focus();
        this.setState({copyActionMessageVisible: true});
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
                  <form>
                      <Form.Group controlId="exampleForm.ControlSelect1">

                      </Form.Group>
                  </form>

                  <div
                      className="ag-theme-balham"
                      style={{ height: '250px', width: '100%' }}
                  >

                  </div>


                      {
                          <div>
                              <table>
                                  <tbody>
                                  <tr>

                                  </tr>
                                  </tbody>
                              </table>
                          </div>
                      }
              </CardBody>
            </Card>
          </Col>
         </Row>
      </div>
    );
  }
}

export default SalaryCalc;
