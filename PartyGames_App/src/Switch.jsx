import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MLC from './components/MLC'
import BeerPong from './components/BeerPong'
import FlipCup from './components/FlipCup'
import Beersbee from './components/Beersbee'




class PageSwitch extends React.Component {
    render () {
        return (
        <div>

            <Switch>
               <Route exact path='/' component={MLC}/>
                <Route path='/beerpong' component={BeerPong}/>
                <Route path='/flipcup' component={FlipCup}/>
                <Route path='/beersbee' component={Beersbee}/>


            </Switch>

        </div>
        )
    }
}

export default PageSwitch;

