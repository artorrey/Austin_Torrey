var ProgramForm = require("./ProgramForm");
var ProgramTextOutput = require("./ProgramTextOutput");
var React = require('react');



var Program = React.createClass({

    getDefaultProps(){
        return {
            food: "something sweet",
            beverage: "something served cold"
        }
    },
    getInitialState: function() {
        return {
            food: this.props.food,
            beverage: this.props.beverage
        }
    },

    handleNewUpdate: function(foodBeverage) {
        this.setState(
            foodBeverage

        )
    },
    render: function() {
        return (
            <div>
                <ProgramTextOutput food={this.state.food} beverage={this.state.beverage} />
                <ProgramForm onNewUpdate={this.handleNewUpdate}/>
            </div>
        )
    }
});

module.exports = Program;