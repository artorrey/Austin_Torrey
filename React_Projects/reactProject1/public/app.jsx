var HeaderText = React.createClass({
    render(){
        return <div>
            <h1>I love learning how to code with React.js</h1>
            <p>Hows it going {this.props.username}? I understand that today you want to learn about {this.props.subject}. Is that correct?</p>

        </div>
    }
})


ReactDOM.render(<div><HeaderText username = "human" subject="reactjs">

    </HeaderText>
    </div>,

    document.getElementById('react-container'))