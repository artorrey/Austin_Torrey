import React, { Component } from 'react';
import LineItem from './LineItem';
import axios from 'axios';

class Timesheet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lineItems: {},
            addNewLineItem: false,
            desc: "",
            rate: 0,
            totalCost: 0,
            workdate: ""

        };
    }

    getLineItems(id) {
        axios.get(`api/timesheet/${id}/line_items`)
            .then(data => {
                data.data.map((i) => {
                    const lineItems = {...this.state.lineItems};
                    lineItems[`lineItems-${i._id}`] = i;
                    this.setState({lineItems});
                    console.log(lineItems.length);
                });
            })
            .catch(function (error) {
                console.log(error);

            });
    }

    componentDidMount() {
        this.getLineItems(this.props.selectedTimesheet._id);
    }

    renderLineItems = (key) => {
        const lineItem = this.state.lineItems[key];
        return (
            <div key={key}>
                <LineItem lineItem={lineItem}/>
            </div>
        );
    };

    addNewLineItem = () => {
        this.setState({
            addNewLineItem: true
        })
    };



    handleLineItemChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleLineItemSubmit(e) {
        axios.post(`api/timesheet/${this.props.selectedTimesheet._id}/line_item`, {
            workdate: this.state.workdate,
            minutes: this.state.minutes
        })
            .then ((data) => {
                console.log(data);
                this.getLineItems(this.props.selectedTimesheet._id);
                this.setState({
                    addNewLineItem: false
                });
                const rate = (this.state.rate !== 0) ? this.state.rate : this.props.selectedTimesheet.rate;
                const totalCost = (this.state.totalCost !==0) ? this.state.totalCost : this.props.selectedTimesheet.totalCost;
                const newCost = ((rate * this.state.minutes) + totalCost);
                this.setState({
                    totalCost: newCost
                })




            })
            .catch ((err) => {
                console.log(err);
            })
    }

    handleTimeSheetChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleTimeSheetSubmit(e) {
        const rate = (this.state.rate !== 0) ? this.state.rate : this.props.selectedTimesheet.rate;
        const desc = (this.state.desc !== "") ? this.state.desc : this.props.selectedTimesheet.description;
        const totalCost = (this.state.totalCost !==0) ? this.state.totalCost : this.props.selectedTimesheet.totalCost;
        axios.put(`api/timesheet/${this.props.selectedTimesheet._id}`, {
            description: desc,
            rate: rate,
            totalCost: totalCost
        })
            .then ((data) => {
                console.log(data);
                this.props.deselectTimeSheet();
            })
            .catch ((err) => {
                console.log(err);
            })

    }


    render() {
        return (
          <div className='App'>



        <br/>

              <div className="form-inline">
        <label>Description: </label>
          <textarea
              rows='5'
              cols='20'
              placeholder={this.props.selectedTimesheet.description}
              name='desc'
              onChange={(e) => this.handleTimeSheetChange(e)}
              className="form-control"
          />

        <label>Rate: </label>
        <input
              type='text'
              defaultValue={this.props.selectedTimesheet.rate}
              name='rate'
              onChange={(e) => this.handleTimeSheetChange(e)}
              className="form-control"
            />
        <label>Total Cost: </label>
              {this.state.totalCost !== 0 &&
                  <input
                      type='text'
                      name='totalCost'
                      value={this.state.totalCost}
                      className="form-control"
                  />
              }
              {this.state.totalCost === 0 &&
                  <input
                      type='text'
                      defaultValue={this.props.selectedTimesheet.totalCost}
                      name='totalCost'
                      className="form-control"

                  />
              }
              <br/>
              <button type="button" className="btn btn-primary" onClick={(e) => this.handleTimeSheetSubmit(e)}>Save & Exit Timesheet</button>
              </div>
              <br/>
              <table className="table">
                  <thead>
                  <tr>
                      <th  scope="col">Date</th>
                      <th  scope="col">Minutes</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                      Object.keys(this.state.lineItems).map(this.renderLineItems)
                  }
                  </tbody>
              </table>


              {this.state.addNewLineItem &&
              <div className='App'>
                  <div className="form-inline">

                  <label>Date: </label>
                  <input
                      type='date'
                      name='workdate'
                      onChange={(e) => this.handleLineItemChange(e)}
                      className="form-control"

                  />
                  <label>Minutes: </label>
                  <input
                      type='text'
                      name='minutes'
                      onChange={(e) => this.handleLineItemChange(e)}
                      className="form-control"

                  />

                      <button
                          type="button"
                          onClick={(e) => this.handleLineItemSubmit(e)}
                          className="btn btn-primary"
                      >Save Line Item</button>
              </div>
              </div>

              }
              <button type="button" className="btn-btn-primary" onClick={this.addNewLineItem}>Add New Line Item</button>
      </div>
        );
    }
}

export default Timesheet;
