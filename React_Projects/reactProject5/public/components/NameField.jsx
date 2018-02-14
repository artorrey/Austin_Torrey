// In the NameField component:
//
//     In the render function, create an input and give it 4 attributes: a bootstrap CSS class, placeholder text, onChange, and value.
//     You will need to set the initial state of our form to be empty. In the return object for getInitialState, give it a key called “value”
// and set it to a blank string.
//     You will need two functions: a function called ‘onChange’ that sets the state to be the value coming from the
// input, and a function called ‘clear’ that clears the input field after the submit button is hit.

var React = require('react');

var NameField = React.createClass({

    getInitialState: function() {
        return {
            value: ""
        }

    },
    onChange: function(e) {
        var name = e.target.value;
        console.log(name);
        this.setState({
            value: name
        })
    },
    clear: function() {
        this.setState({
            value: ""
        })

    },
    render: function() {
        return (
            <div className="form-group">

                <input type="text" className="form-control" onChange={this.onChange} value={this.state.value} placeholder="Enter Name" />

            </div>

        )
    }
});

module.exports = NameField;