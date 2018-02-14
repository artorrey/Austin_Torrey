
// In app.jsx, you’ll be creating three components: a parent component called ‘Program’, and two child components
// called ‘ProgramForm’ and ‘ProgramTextOutput’. You will also need to have two props: food and beverage.
//

//     Finally, in your Program component, you’ll want to set the default props and initial state.
// You’ll also need to have a function called ‘handleNewUpdate’ which is used to set the state.
// The render function should render the two child components we created- the ProgramTextOutput
// component should take the food and beverage props, and the ProgramForm component should take
// a prop called ‘onNewUpdate’ that has the handleNewUpdate function passed into it.


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

// In the ProgramForm component, you’ll need two parts: a function called “submitted” that contains the logic for
// grabbing the text from the form, and a render function with the HTML of the form itself. In the submitted function, you’ll want to create
// to a variable that contains an empty object (such as var foodBeverage = {};) and use it to hold the values that come from the form.
//

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
// In the ProgramTextOutput component, you’ll render two h1 messages. The first says “Your favorite dessert: (food prop)” and
//     the second says “Your favorite beverage: (beverage prop)”.
//

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


ReactDOM.render(
    <Program/>,

    document.getElementById('react-container'));












//
//     When you finish, you should have roughly 77 lines of code in your app.jsx file.