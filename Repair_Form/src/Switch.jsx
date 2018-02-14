import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RepairForm from './components/form';
import RepairLog from './components/repairlog';
import PrintForm from './components/printform';

class PageSwitch extends React.Component {
    render () {
        return (
        <div>
            <Switch>
                <Route exact path='/' component={RepairForm}/>
                <Route path='/repairlog' component={RepairLog}/>
                <Route path='/printform' component={PrintForm}/>
            </Switch>
        </div>
        )
    }
}

export default PageSwitch;

