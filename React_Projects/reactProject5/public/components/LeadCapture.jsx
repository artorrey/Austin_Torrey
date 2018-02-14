
//     In the LeadCapture component:
//
//     Create an onSubmit function that does two things: a) show an alert box that says “Please provide a correct email” if the email is not valid,
// and an alert box that says “Thank you for your submission” if it is valid b) Runs the clear functions to clear the input fields.
//     In your render function: a) Add additional bootstrap styling b) put in the NameField and EmailField components and c) have the button
// run the onSubmit function when it’s pressed.
//     Ok, so that was a lot. Let me know if you need further clarification. Explaining React can be kinda confusing sometimes because theres a
// lot of going back and forth.

var NameField = require("./NameField");
var EmailField = require("./EmailField");
var React = require('react');

var LeadCapture = React.createClass({

    onSubmit: function () {

        if(!this.refs.email.state.valid) {
            alert("Please provide a correct email");
        } else {
            alert("Thank you for your submission");
            this.refs.name.clear();
            this.refs.email.clear();
        }


    },
    render: function () {
        return (

                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
            <h1> Please enter your name and email.</h1>
                        <form>
            <NameField ref="name" />
            <EmailField ref="email" />

            <button className="btn btn-primary" onClick={this.onSubmit} >Submit</button>
            </form>
            </div>
                    <div className="col-sm-3"></div>

        </div>


        )
    }
});

module.exports = LeadCapture;



