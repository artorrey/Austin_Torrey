import React, { Component } from 'react';
import Timesheet from './Timesheet';
import axios from 'axios';

import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            timesheets: [],
            timesheetIsSelected: false,
            selectedTimesheet: {}
        };

    }
    //GET all exsiting timesheets
    getTimesheets() {
        axios.get('/api/timesheets')
            .then(data => {
                data.data.map((i) => {
                    const timesheets = {...this.state.timesheets};
                    timesheets[`timesheet-${i._id}`] = i;
                    this.setState({timesheets});
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    componentDidMount() {
        this.getTimesheets();
    };
    //
    selectTimesheet = (selectedTimesheet) => {
        this.setState({
            selectedTimesheet,
            timesheetIsSelected: true

        });
    };

    deselectTimeSheet = () => {
        this.getTimesheets();
        this.setState({
            timesheetIsSelected: false
        })
    }

    renderTimesheets = (key) => {
        const timesheet = this.state.timesheets[key];
        const id = timesheet._id.slice(0,5);
        return (
            <div key={key}>
                <div
                    className="col-sm-4"
                >
                <button
                    id="ts_button"
                    type="button"
                    className="btn btn-success"
                    onClick={() => this.selectTimesheet(timesheet)}
                >TimeSheet: {id}</button>
                </div>
            </div>
        );
    };

    addNewTimeSheet = () => {
        axios.post('api/timesheets', {

        })
            .then ((data) => {
                this.setState({
                    selectedTimesheet: data.data,
                    timesheetIsSelected: true
                });
                this.getTimesheets();
            })
            .catch ((err) => {
                console.log(err);
            })

    };

    render() {
        return <div className='App'>
          <h1>TimeSheets</h1>
            {this.state.timesheetIsSelected === false &&
                <div>
                <button type="button" className="btn btn-primary" onClick={this.addNewTimeSheet}>Add New TimeSheet</button>

            {
                Object.keys(this.state.timesheets).map(this.renderTimesheets)
            }
                </div>
            }

        {this.state.timesheetIsSelected &&

                <Timesheet
                    selectedTimesheet={this.state.selectedTimesheet}
                    deselectTimeSheet={this.deselectTimeSheet}

                />

            }



      </div>;
    }
}

export default App;
