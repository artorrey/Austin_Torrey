import React, { Component } from 'react';

class LineItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div>


                  <tr>
                      <td className="col-sm-2" scope="row">{this.props.lineItem.workdate}</td>
                      <td className="col-sm-1" scope="row">{this.props.lineItem.minutes}</td>
                  </tr>


          </div>


        );
    }
}

export default LineItem;
