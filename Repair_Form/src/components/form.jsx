import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

class RepairForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            ra_number: "",
            date_rcvd: "",
            customer: "",
            contact_name: "",
            phone: "",
            email: "",
            item: "",
            serial_number: "",
            accessories: "",
            international: false,
            status: "",
            previous_ra_inv: "",
            packaging: "",
            condition: "",
            problem: ""

        };
        this.handleSubmit.bind(this);

    }


    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        axios.post('http://localhost:3001/api/repairs', {
                ra_number: this.state.ra_number,
                date_rcvd: this.state.date_rcvd,
                customer: this.state.customer,
                contact_name: this.state.contact_name,
                phone: this.state.phone,
                email: this.state.email,
                item: this.state.item,
                serial_number: this.state.serial_number,
                accessories: this.state.accessories,
                international: this.state.international,
                status: this.state.status,
                previous_ra_inv: this.state.previous_ra_inv,
                packaging: this.state.packaging,
                condition: this.state.condition,
                problem: this.state.problem
            })
            .then ((data) => {
                console.log(data);
            })
            .catch ((err) => {
                console.log(err);
            })
    }

    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <Link to='/repairlog'><button className="btn btn-primary">Repair Log</button></Link>
                </div>
                <div className="row">
                    <div id="repair-form" className="col-4-sm">

                    <label>RA # </label>
                    <input className="form-control"
                        name="ra_number"
                        type="text"
                        placeholder="Enter RA #"
                        onChange={(e) => this.handleChange(e)}
                    />

                    <label>Date Received</label>
                    <input className="form-control"
                        name="date_rcvd"
                        type="date"
                        placeholder="Enter Rcvd Date"
                        onChange={(e) => this.handleChange(e)}
                    />

                    <label>Customer</label>
                    <input className="form-control"
                        name="customer"
                        type="text"
                        placeholder="Enter Customer"
                        onChange={(e) => this.handleChange(e)}
                    />

                    <label>Contact Name</label>
                    <input className="form-control"
                        name="contact_name"
                        type="text"
                        placeholder="Enter Contact Name"
                        onChange={(e) => this.handleChange(e)}
                    />

                    <label>Phone</label>
                    <input className="form-control"
                        name="phone"
                        type="text"
                        placeholder="Enter Phone Number"
                        onChange={(e) => this.handleChange(e)}
                    />

                    <label>Email</label>
                    <input className="form-control"
                        name="email"
                        type="text"
                        placeholder="Enter Email"
                        onChange={(e) => this.handleChange(e)}
                    />

                    <label>Item</label>
                    <input className="form-control"
                        name="item"
                        type="text"
                        placeholder="Enter Item Desc"
                        onChange={(e) => this.handleChange(e)}
                    />

                    <label>Serial #</label>
                    <input className="form-control"
                        name="serial_number"
                        type="text"
                        placeholder="Enter Serial #"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <label>Accessories</label>
                    <input className="form-control"
                        name="accessories"
                        type="text"
                        placeholder="Enter Accessories"
                        onChange={(e) => this.handleChange(e)}
                    />

                    <label>International</label>
                    <input className="form-control"
                        type="checkbox"
                        name="international"
                        onChange={(e) => this.handleChange(e)}
                    />

                    <label>Status</label>
                    <select className="form-control"
                        name="status"
                        onChange={(e) => this.handleChange(e)}>
                        <option defaultValue="" >Select Status</option>
                        <option value="none">None</option>
                        <option value="expedite">Expedite</option>
                        <option value="warranty">Eval for Warranty</option>
                    </select>

                        {this.state.status === "warranty" &&
                            (
                                <div>
                                <label>Previous Inv/RA</label>
                                <input className="form-control"
                                       type="text"
                                       name="previous_ra_inv"
                                       onChange={(e) => this.handleChange(e)}

                                />
                                </div>
                            )
                        }

                    <label>Packaging</label>
                    <select className="form-control"
                        name="packaging"
                        onChange={(e) => this.handleChange(e)}>
                        <option defaultValue="">Select Packaging</option>
                        <option value="none">None</option>
                        <option value="roadcase">Roadcase</option>
                        <option value="box_yes">Box(Reusable)</option>
                        <option value="box_no">Box(Not Reusable)</option>
                    </select>

                    <label>Condition on Receipt</label>
                    <textarea className="form-control"
                        rows="5"
                        name="condition"
                        onChange={(e) => this.handleChange(e)}
                    />

                    <label>Reported Problem</label>
                    <textarea className="form-control"
                        rows="5"
                        name="problem"
                        onChange={(e) => this.handleChange(e)}
                    />
                        <br/>
                        <button
                            className="btn btn-primary"
                            onClick={(e) => this.handleSubmit(e)}
                        >Submit
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}

export default RepairForm;
