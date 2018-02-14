import React from 'react'
import '../index.css'
import axios from 'axios';
import { Link } from 'react-router-dom'


class MLC extends React.Component {
    constructor(){
        super();

        this.state = {
            scores: [],
        };

        this.getPlayers.bind(this);
    }

    getPlayers() {
        axios.get('http://localhost:3001/api/standings')
            .then( data => {
                data.data.map((i) => {
                    const scores = {...this.state.scores};
                    scores[`score-${i._id}`] = i;
                    this.setState({ scores });
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    componentDidMount(){
        this.getPlayers();
    }

    renderScores = (key) => {
        const score = this.state.scores[key];
        return(
            <div className="row" id="score" key={key}>
                <div className="col-sm-6">
                <h3  id="player-name" >{score.player}:</h3>
                </div>
                <div  className="col-sm-2">
                <h3 id="player-score">{score.score}</h3>
                </div>
                <div className="col-sm-2"> </div>
            </div>
        )
    };


    render(){
        return(
            <div id="standings">


                <h1 id="standings-header">MLC Standings</h1>
                <hr/>

                {
                    Object.keys(this.state.scores).map(this.renderScores)
                }

            </div>
        )
    }
}

export default MLC;
