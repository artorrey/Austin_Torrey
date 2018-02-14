import React from 'react';
import '../index.css'

class PrintForm extends React.Component {
    constructor() {
        super()

        this.state = {
            expedite: false,
            warranty: false,
            roadcase: false,
            boxYes: false,
            boxNo: false,
            noPackaging: false
        }
        this.statusAndPackaging.bind(this)
    }

    statusAndPackaging = (repair) => {
        if(repair.status === "expedite"){
            this.setState({expedite: true})
        } else if (repair.status === "warranty"){
            this.setState({warranty: true})
        } else {
            return false
        }
        if(repair.packaging === "roadcase"){
            this.setState({roadcase: true})
        } else if (repair.packaging === "box_yes"){
            this.setState({boxYes: true})
        } else if (repair.packaging === "box_no"){
            this.setState({boxNo: true})
        } else {
            this.setState({noPackaging: true})
        }
    };

    componentDidMount(){
        this.statusAndPackaging(this.props.selectedRepair);
    }

    render () {
        const repair = this.props.selectedRepair;
        return(
            <div className="container-fluid" id="printform">
                <div className="row" id="Row-1">
                    <div className="col-3-md" id="row1">
                     <label id="ra-num-label" >REPAIR AUTH#
                        <input
                        type="text"
                        id="ra_number"
                        className="print-form-input"
                        value={repair.ra_number}

                        /></label>
                    </div>
                 <div className="col-6-md" id="row1">
                    <label id="rcvd-label" >Received:
                        <input
                            type="text"
                            id="rcvd"
                            className="print-form-input"
                            value={repair.date_rcvd}

                        /></label>
                </div>
                </div>
                <div className="row" id="Row-2">
                <div className="col-3-md" id="row1">
                    <input
                        type="checkbox"
                        id="expedite"
                        className="print-form-checkbox"
                        checked={this.state.expedite}


                    /><label id="expedite-label" >Expedited</label>
                </div>
                <div className="col-3-md" id="row1">
                    <input
                        type="checkbox"
                        id="warranty"
                        className="print-form-checkbox"
                        checked={this.state.warranty}


                    /><label id="warranty-label" >LP Warranty</label>
                </div>
                <div className="col-3-md" id="row1">
                    <label id="prev-ra-label" >Previous RA/INV#
                        <input
                            type="text"
                            id="prev-ra"
                            className="print-form-input"
                            value={repair.previous_ra_inv}


                        /></label>
                </div>
                <div className="col-3-md" id="row1">
                    <input
                        type="checkbox"
                        id="estimate"
                        className="print-form-checkbox"


                    /><label id="estimate-label" >Estimate</label>
                </div>
                </div>
                <div className="row">
                    <div className="col-4-md" id="row1">
                        <label id="quote-label" >Quote #
                            <input
                                type="text"
                                id="quote"
                                className="print-form-input"


                            /></label>
                    </div>
                    <div className="col-4-md" id="row1">
                        <label id="approved-by-label" >Approved By:
                            <input
                                type="text"
                                id="approved-by"
                                className="print-form-input"


                            /></label>
                    </div>
                    <div className="col-4-md" id="row1">
                        <label id="date-label" >Date
                            <input
                                type="text"
                                id="date"
                                className="print-form-input"


                            /></label>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-6-md" id="row1">
                        <label id="bill-to-label" >Bill To:
                            <input
                                type="text"
                                id="bill-to"
                                className="print-form-input"
                                value={repair.customer}


                            /></label>
                        <label id="item-label" >Item:
                            <input
                                type="text"
                                id="item"
                                className="print-form-input"
                                value={repair.item}


                            /></label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6-md" id="row1">
                        <label id="contact-label" >Contact
                            <input
                                type="text"
                                id="contact"
                                className="print-form-input"
                                value={repair.contact_name}


                            /></label>
                        <label id="serial-label" >Serial#:
                            <input
                                type="text"
                                id="serial"
                                className="print-form-input"
                                value={repair.serial_number}


                            /></label>

                    </div>
                </div>
                <div className="row">
                    <div className="col-6-md" id="row1">
                        <label id="phone-label" >Tel#
                            <input
                                type="text"
                                id="phone"
                                className="print-form-input"
                                value={repair.phone}


                            /></label>
                        <label id="accs-label" >Accs:
                            <input
                                type="text"
                                id="assc"
                                className="print-form-input"
                                value={repair.accessories}


                            /></label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6-md" id="row1">
                        <label id="email-label" >Email:
                            <input
                                type="text"
                                id="email"
                                className="print-form-input"
                                value={repair.email}


                            /></label>
                        <label id="intl-label" >International:
                            <input
                                type="checkbox"
                                id="intl"
                                className="print-form-checkbox"
                                checked={repair.international}


                            /></label>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <label id="row1">Packaging:</label>
                    <div className="col-2-md" id="row1">
                        <input
                            type="checkbox"
                            id="roadcase"
                            className="print-form-checkbox"
                            checked={this.state.roadcase}


                        /><label id="roadcase-label" >Roadcase</label>
                    </div>
                    <div className="col-2-md" id="row1">
                        <input
                            type="checkbox"
                            id="box-yes"
                            className="print-form-checkbox"
                            checked={this.state.boxYes}


                        /><label id="box-yes-label" >Reusable Box</label>
                    </div>
                    <div className="col-2-md" id="row1">
                        <input
                            type="checkbox"
                            id="box-no"
                            className="print-form-checkbox"
                            checked={this.state.boxNo}


                        /><label id="box-no-label" >Non-reusable Box</label>
                    </div>
                    <div className="col-2-md" id="row1">
                        <input
                            type="checkbox"
                            id="none"
                            className="print-form-checkbox"
                            checked={this.state.noPackaging}


                        /><label id="none-label" >None</label>
                    </div>
                </div>
                <hr/>
                <div className="row" id="techs">
                    <label id="row1">Tech:</label>
                    <div className="col-2-md" id="row1">
                        <input
                            type="checkbox"
                            id="techbox"
                            className="print-form-checkbox"
                        /><label id="none-label" >Chris</label>
                    </div>
                    <div className="col-2-md" id="row1">
                        <input
                            type="checkbox"
                            id="techbox"
                            className="print-form-checkbox"
                        /><label id="none-label" >Danny</label>
                    </div>
                    <div className="col-2-md" id="row1">
                        <input
                            type="checkbox"
                            id="techbox"
                            className="print-form-checkbox"
                        /><label id="none-label" >Don</label>
                    </div>
                    <div className="col-2-md" id="row1">
                        <input
                            type="checkbox"
                            id="techbox"
                            className="print-form-checkbox"
                        /><label id="none-label" >Kasey</label>
                    </div>
                    <div className="col-2-md" id="row1">
                        <input
                            type="checkbox"
                            id="techbox"
                            className="print-form-checkbox"
                        /><label id="none-label" >Tom</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12-md" id="row1">
                        <label id="condition-label" >Condition on receipt:
                            <input
                                type="text"
                                id="condition"
                                className="print-form-input"
                                value={repair.condition}

                            /></label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12-md" id="row1">
                        <label id="problem-label" >Reported Problem
                            <textarea
                                rows="3"
                                id="problem"
                                className="print-form-input"
                                value={repair.problem}

                            /></label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2-md" id="row1">
                        <input
                            type="checkbox"
                            id="non-repair"
                            className="print-form-checkbox"
                        /><label id="none-label" >NOT REPAIRABLE</label>
                    </div>
                    <div className="col-2-md" id="row1">
                        <input
                            type="checkbox"
                            id="non-repair"
                            className="print-form-checkbox"
                        /><label id="none-label" >NOT RELIABLE TO REPAIR</label>
                    </div>
                    <div className="col-2-md" id="row1">
                        <input
                            type="checkbox"
                            id="non-repair"
                            className="print-form-checkbox"
                        /><label id="none-label" >NOT ECONOMICAL TO REAPIR</label>
                    </div>
                </div>
                <div className="row">
                    <label id="row1">DISPOSITION:</label>
                    <div className="col-2-md" id="row1">
                        <input
                            type="checkbox"
                            id="disposition"
                            className="print-form-checkbox"


                        /><label id="disp-label" >Return to Customer</label>
                    </div>
                    <div className="col-2-md" id="row1">
                        <input
                            type="checkbox"
                            id="disposition"
                            className="print-form-checkbox"


                        /><label id="disp-label" >Discard</label>
                    </div>
                    <div className="col-3-md" id="row1">
                        <label id="prev-ra-label" >Approved by
                            <input
                                type="text"
                                id="prev-ra"
                                className="print-form-input"


                            /></label>
                    </div>
                    <div className="col-3-md" id="row1">
                        <label id="prev-ra-label" >Date
                            <input
                                type="text"
                                id="prev-ra"
                                className="print-form-input"


                            /></label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3-md" id="row1">
                        <label id="prev-ra-label" >Replacement Part Number:
                            <input
                                type="text"
                                id="prev-ra"
                                className="print-form-input"


                            /></label>
                    </div>
                </div>
                <div className="row">
                    <h1>PARTS USED IN REPAIR</h1>
                    <table>
                        <thead>
                        <tr>
                            <th>QTY</th>
                            <th>P/N</th>
                            <th>Description</th>
                            <th>Designator</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td> </td>
                            <td> </td>

                        </tr>
                        </tbody>
                    </table>
                </div>

                <button onClick={window.print}>Print</button>
            </div>
        )
    }


}

export default PrintForm;