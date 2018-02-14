import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageSwitch from '../src/Switch';
import NavBar from './components/NavBar'



class App extends React.Component {
    render () {
        return (


            <Router>
                <div>
                    <NavBar/>
                <Route component={PageSwitch} />
                </div>
            </Router>

        )
    }
}

export default App;