var Program = React.createClass({

    getDefaultProps(){
      return {
          name: "Human",
          mood: "happy"
      }
    },
    getInitialState: function() {
        return {
            name: this.props.name,
            mood: this.props.mood
        }
    },
    Submitted: function(e) {
        e.preventDefault();

          var name = this.refs.newName.value;
        this.refs.newName.value = '';
          var mood = this.refs.newMood.value;
        this.refs.newMood.value = '';

        if((name.length > 0) && (mood.length > 0)) {
            this.setState({
                name: name,
                mood: mood
            })
        }
    },

    render: function(){
        var name = this.state.name;
        var mood = this.state.mood;
        return (
            <div className="Program">
            <h1>How are you {name}? I understand that today you feel: {mood}</h1>
                <form onSubmit={this.Submitted}>
            <label>Change the name: <input ref="newName" type="text" placeholder="required"/></label><br/>
            <label>Change the mood: <input ref="newMood" type="text" placeholder="required"/></label><br/>
                    <br/><input type="submit"></input>
                </form>
            </div>
        );
    }
});


ReactDOM.render(
    <Program/>,

    document.getElementById('react-container'));