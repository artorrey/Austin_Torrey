var React = require('react');



var ProgramForm = React.createClass({

    Submitted: function(e) {
        e.preventDefault();

        var foodBeverage = {};
        if((this.refs.food.value.length > 0) && (this.refs.beverage.value.length > 0)) {
            foodBeverage.food = this.refs.food.value,
                foodBeverage.beverage = this.refs.beverage.value
        };
        this.refs.food.value = '';
        this.refs.beverage.value = '';
        this.props.onNewUpdate(foodBeverage);
    },
    render: function() {
        return (

            <div className="ProgramForm">
                <form onSubmit={this.Submitted}>
                    <label>Favorite food: <input ref="food" type="text" placeholder="Enter food"/></label><br/>
                    <label>Favorite beverage: <input ref="beverage" type="text" placeholder="Enter beverage"/></label><br/>
                    <br/><input type="submit"></input>
                </form>
            </div>
        )
    }

});

module.exports = ProgramForm;
