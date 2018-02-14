//     In the EmailField component:
//
// You’ll be doing the email validation logic in this component.
//
// In your getInitialState, set it up like this: http://i.imgtc.com/tXnoCeE.png
// What we are doing is setting up the form to be valid by default. When there is an error in the email that’s being typed,
// valid will be set to false. (This is your hint to figuring out to set up the validation logic.)
// You will need an onChange function that checks whether the email is valid or not. You will want to use an If-else statement for this.
//
// You will need a clear function that clears the field after the submit button is hit.
//     In the render function, you will need some logic to make the field red if the email is not valid. Hint: try using a
// ternary operator and store the results into a variable called ‘formClass’. (Also check this out to see how to change the
// field colors with Bootstrap): http://www.w3schools.com/Bootstrap/bootstrap_forms_inputs2.asp)
//     Once again, create the input in the render function and give it 4 attributes: a bootstrap CSS class, placeholder text, onChange, and value.


var React = require('react');
var validator = require("email-validator");


var EmailField = React.createClass({
    getDefaultProps: function() {
        return {
            valid: true,
            value: "",
            class: "form-group"
        }
    },
    getInitialState: function () {
        return {
            valid: this.props.valid,
            value: this.props.value,
            class: this.props.class
        }
    },
    onChange: function (e) {

        var formClass = {};
        var email = e.target.value;
        var validate = validator.validate(email);


        formClass.value = email;
        formClass.valid = validate;
        validate ? formClass.class = "form-group has-success" : formClass.class = "form-group has-error";


        console.log(validate);






        this.setState(
            formClass
        )



    },
    clear: function () {
       this.setState({
           value: "",
           valid: true,
           class: "form-group"

       })

    },

    render: function () {
        return (
            <div className={this.state.class}>
                <input  placeholder="Enter Email" id="email" className="form-control" type="text" onChange={this.onChange} value={this.state.value}  />
            </div>
        )

    }
});

module.exports = EmailField;