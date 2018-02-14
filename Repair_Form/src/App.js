import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageSwitch from '../src/Switch';



class App extends React.Component {
    render () {
        return (

                <Router>
                    <Route component={PageSwitch} />
                </Router>
        )
    }
}

export default App;