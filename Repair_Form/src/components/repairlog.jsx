import React from 'react';
import axios from 'axios';
import PrintForm from './printform';


class RepairLog extends React.Component {
    constructor(){
        super();

        this.state = {
            repairs: [],
            selectedRepair: {},
            repairIsSelected: false,
        };

        this.getRepairs.bind(this);
    }

    getRepairs() {
        axios.get('http://localhost:3001/api/repairs')
            .then( data => {
                data.data.map((i) => {
                    const repairs = {...this.state.repairs};
                    repairs[`repair-${i._id}`] = i;
                    this.setState({ repairs });
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    componentDidMount() {
        this.getRepairs();
    }

    selectRepair = (selectedRepair) => {
        this.setState({
            selectedRepair,
            repairIsSelected: true,

        })
    }

    renderRepairs = (key) => {

        const repair = this.state.repairs[key];
        return(
            <tr key={key}>
                <td>{repair.ra_number}</td>
                <td>{repair.customer}</td>
                <td>{repair.item}</td>
                <td>{repair.serial_number}</td>
                <td>{repair.date_rcvd}</td>
                <td>{repair.problem}</td>
                <td>
                    <button
                        onClick={() => this.selectRepair(repair)}
                    >Repair Form</button></td>
            </tr>
        )

    }

    render() {
        return(
            <div>
                {!this.state.repairIsSelected &&
                <div className="col-6-sm">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>RA#</th>
                            <th>Customer</th>
                            <th>Item</th>
                            <th>Serial#</th>
                            <th>Date Rcvd</th>
                            <th>Problem</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(this.state.repairs).map(this.renderRepairs)
                        }
                        </tbody>
                    </table>
                </div>
                }
                {this.state.repairIsSelected &&


                    <PrintForm
                        selectedRepair={this.state.selectedRepair}
                    />


                }
            </div>
        )
    }
}

export default RepairLog;