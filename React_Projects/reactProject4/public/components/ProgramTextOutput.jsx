var React = require('react');


var ProgramTextOutput = React.createClass({

    render: function() {
        var food = this.props.food;
        var beverage = this.props.beverage;
        return (
            <div className="ProgramTextOutput">
                <h1>Your favorite dessert: {food}</h1>
                <h1>Your favorite beverage: {beverage}</h1>

            </div>
        )
    }
});

module.exports = ProgramTextOutput;