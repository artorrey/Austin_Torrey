import React from 'react'
import '../index.css'
import axios from 'axios';

class Beersbee extends React.Component {
    constructor() {
        super();

        this.state = {
            scores: [],
            match1Ended: false,
            match1winner: "",
            match2Ended: false,
            match2winner: "",
            match3Ended: false,
            match3winner: "",
            games: [],
            beersbeeMatches: [],
        };

        this.endMatch1Team1.bind(this);
        this.endMatch1Team2.bind(this);
        this.endMatch2Team1.bind(this);
        this.endMatch2Team3.bind(this);
        this.endMatch3Team2.bind(this);
        this.endMatch3Team3.bind(this);
        this.getGames.bind(this);
        this.saveGame.bind(this);

    }

    getGames() {
        const beersbeeMatches = [];
        axios.get('http://localhost:3001/api/games')
            .then(res => {
                this.setState({ games: res.data });
                for (var i=0; i < res.data.length; i++ ){
                    if (res.data[i].game === "beersbee"){
                        beersbeeMatches.push(res.data[i]);
                        this.setState({ beersbeeMatches })
                        for (var j=0; j < beersbeeMatches.length; j++) {
                            if (beersbeeMatches[j].match === 1) {
                                if (beersbeeMatches[j].winner === "team1") {
                                    this.setState ({
                                        match1winner: "team1",
                                        match1Ended: true
                                    })
                                } else if (beersbeeMatches[j].winner === 'team2') {
                                    this.setState ({
                                        match1winner: "team2",
                                        match1Ended: true
                                    })
                                } else {
                                    console.log("This match hasn't played")
                                }

                            } else if (beersbeeMatches[j].match === 2) {
                                if (beersbeeMatches[j].winner === "team1") {
                                    this.setState({
                                        match2winner: "team1",
                                        match2Ended: true
                                    })
                                } else if (beersbeeMatches[j].winner === 'team3') {
                                    this.setState({
                                        match2winner: "team3",
                                        match2Ended: true
                                    })
                                } else {
                                    console.log("This match hasn't played")
                                }
                            } else if (beersbeeMatches[j].match === 3) {
                                if (beersbeeMatches[j].winner === "team2") {
                                    this.setState({
                                        match3winner: "team2",
                                        match3Ended: true
                                    })
                                } else if (beersbeeMatches[j].winner === 'team3') {
                                    this.setState({
                                        match3winner: "team3",
                                        match3Ended: true
                                    })
                                } else {
                                    console.log("This match hasn't played")
                                }
                            }

                        }
                    } else {
                        console.log("no saved games")
                    }
                }
            })
            .catch(function (error) {
                console.log(error)
            })

    }

    componentDidMount(){
        this.getGames();
    }

    updateScore = (id1) =>{
        axios.put(`http://localhost:3001/api/standings/${id1}`)

            .catch(err => {
                console.log(err);
            });

    };

    saveGame = (gameId, winner) => {

        axios.put(`http://localhost:3001/api/games/${gameId}`, {
            winner: winner

        })
            .catch(err => {
                console.log(err);
            });
    };





    endMatch1Team1 = () => {
        const WM = '5a47f5b34aef2d9e9b6457f9';
        const DK = '5a47f5d74aef2d9e9b6457fc';

        // const target = e.target;
        // const name = target.name;
        this.setState({
            match1Ended: true,
            match1winner: 'team1'
        });
        this.saveGame('5a4c3c5ee5cea66bca8609ae', 'team1');
        this.updateScore(WM);
        this.updateScore(DK);

    };
    endMatch1Team2 = () => {
        const KH = '5a47f5bc4aef2d9e9b6457fa';
        const JM = '5a47f5c44aef2d9e9b6457fb';
        // const target = e.target;
        // const name = target.name;
        this.setState({
            match1Ended: true,
            match1winner: 'team2'
        });
        this.saveGame('5a4c3c5ee5cea66bca8609ae', 'team2');
        this.updateScore(KH);
        this.updateScore(JM)

    };
    endMatch2Team1 = () => {
        const WM = '5a47f5b34aef2d9e9b6457f9';
        const DK = '5a47f5d74aef2d9e9b6457fc';

        this.setState({
            match2Ended: true,
            match2winner: "team1"
        });
        this.saveGame('5a4c3c62e5cea66bca8609af', 'team1');
        this.updateScore(WM);
        this.updateScore(DK);

    };

    endMatch2Team3 = () => {
        const AT = '5a47f5ab4aef2d9e9b6457f8';

        const ML = '5a47f2ea4aef2d9e9b6457f7';
        this.setState({
            match2Ended: true,
            match2winner: "team3"
        });
        this.saveGame('5a4c3c62e5cea66bca8609af', 'team3');
        this.updateScore(AT);
        this.updateScore(ML);

    };
    endMatch3Team2 = () => {
        const KH = '5a47f5bc4aef2d9e9b6457fa';
        const JM = '5a47f5c44aef2d9e9b6457fb';
        this.setState({
            match3Ended: true,
            match3winner: 'team2'
        });
        this.saveGame('5a4c3c65e5cea66bca8609b0', 'team2');
        this.updateScore(KH);
        this.updateScore(JM);

    };
    endMatch3Team3 = () => {
        const AT = '5a47f5ab4aef2d9e9b6457f8';

        const ML = '5a47f2ea4aef2d9e9b6457f7';
        this.setState({
            match3Ended: true,
            match3winner: 'team3'
        });
        this.saveGame('5a4c3c65e5cea66bca8609b0', 'team3');
        this.updateScore(AT);
        this.updateScore(ML);

    };

    render(){
        const WM = '5a47f5b34aef2d9e9b6457f9';
        const JM = '5a47f5c44aef2d9e9b6457fb';
        const KH = '5a47f5bc4aef2d9e9b6457fa';
        const AT = '5a47f5ab4aef2d9e9b6457f8';
        const DK = '5a47f5d74aef2d9e9b6457fc';
        const ML = '5a47f2ea4aef2d9e9b6457f7';
        return(
            <div className="GamePage">
                {(!this.state.match1Ended && this.state.match1winner === "") &&
                (
                    <div id="FlipM1">
                        <h2 className="match">Match 1</h2>

                        <div className="row">
                            <div className="col-sm-2">
                                <img className="BPlogo" src={ require ("../img/Beersbee_logo-e1382410838990.jpg")}/>
                            </div>
                            <div className="col-sm-4">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.endMatch1Team1}
                                    name="team1"
                                >
                                    <h3>Weston Morrow</h3>
                                    <hr/>
                                    <h3>Darian Koberl</h3>
                                </button>

                            </div>
                            <div className="col-sm-2">
                                {/*<h1 className="vs">VS</h1>*/}
                                <div className="vs"> </div>
                            </div>
                            <div id="right-col" className="col-sm-4">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.endMatch1Team2}

                                    name="team2"
                                ><h3>Keenan Hahn</h3>
                                    <hr/>
                                    <h3>James Moresco</h3>
                                </button>

                            </div>
                        </div>
                    </div>
                )
                }
                {(this.state.match1Ended && this.state.match1winner !== "") &&
                (
                    <div id="FlipM1">
                        <h2 className="match">Match 1</h2>
                        <div className="row">
                            <div className="col-sm-2">
                                <img className="BPlogo" src={ require ("../img/Beersbee_logo-e1382410838990.jpg")}/>
                            </div>
                            <div className="col-sm-4">
                                <button
                                    className="btn btn-primary"

                                    disabled
                                ><span id="gameover">
                                        <h3>Weston Morrow</h3>
                                        <hr/>
                                        <h3>Darian Koberl</h3>
                                    </span>
                                </button>
                                {
                                    this.state.match1winner === "team1" &&
                                    (
                                        <h3 className="winner">WINNER</h3>
                                    )
                                }
                                {
                                    this.state.match1winner === "team2" &&
                                    (
                                        <h3 className="loser">LOSER</h3>
                                    )
                                }
                            </div>
                            <div className="col-sm-2">
                                <div className="vs"> </div>

                            </div>
                            <div id="right-col" className="col-sm-4">
                                <button
                                    className="btn btn-primary"

                                    disabled
                                ><h3>Keenan Hahn</h3>
                                    <hr/>
                                    <h3>James Moresco</h3>
                                </button>
                                {
                                    this.state.match1winner === "team2" &&
                                    (
                                        <h3 className="winner">WINNER</h3>
                                    )
                                }
                                {
                                    this.state.match1winner === "team1" &&
                                    (
                                        <h3 className="loser">LOSER</h3>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
                }

                <br/>

                {(!this.state.match2Ended && this.state.match2winner === "") &&
                (
                    <div id="FlipM2">
                        <h2 className="match">Match 2</h2>
                        <div className="row">
                            <div className="col-sm-2">
                                <img className="BPlogo" src={ require ("../img/Beersbee_logo-e1382410838990.jpg")}/>
                            </div>
                            <div className="col-sm-4">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.endMatch2Team1}
                                    name="team1"
                                >
                                    <h3>Weston Morrow</h3>
                                    <hr/>
                                    <h3>Darian koberl</h3>
                                </button>

                            </div>
                            <div className="col-sm-2">
                                <div className="vs"> </div>

                            </div>
                            <div id="right-col" className="col-sm-4">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.endMatch2Team3}

                                    name="team3"
                                ><h3>Matthew Lupello</h3>
                                    <hr/>
                                    <h3>Austin Torrey</h3>
                                </button>

                            </div>
                        </div>
                    </div>
                )
                }
                {(this.state.match2Ended && this.state.match2winner !== "") &&
                (
                    <div id="FlipM2">
                        <h2 className="match">Match 2</h2>
                        <div className="row">
                            <div className="col-sm-2">
                                <img className="BPlogo" src={ require ("../img/Beersbee_logo-e1382410838990.jpg")}/>
                            </div>
                            <div className="col-sm-4">
                                <button
                                    className="btn btn-primary"

                                    disabled
                                ><span id="gameover">
                                        <h3>Weston Morrow</h3>
                                        <hr/>
                                        <h3>Darian Koberl</h3>
                                    </span>
                                </button>
                                {
                                    this.state.match2winner === "team1" &&
                                    (
                                        <h3 className="winner">WINNER</h3>
                                    )
                                }
                                {
                                    this.state.match2winner === "team3" &&
                                    (
                                        <h3 className="loser">LOSER</h3>
                                    )
                                }
                            </div>
                            <div className="col-sm-2">
                                <div className="vs"> </div>

                            </div>
                            <div id="right-col" className="col-sm-4">
                                <button
                                    className="btn btn-primary"

                                    disabled
                                ><h3>Matthew Lupello</h3>
                                    <hr/>
                                    <h3>Austin Torrey</h3>
                                </button>
                                {
                                    this.state.match2winner === "team3" &&
                                    (
                                        <h3 className="winner">WINNER</h3>
                                    )
                                }
                                {
                                    this.state.match2winner === "team1" &&
                                    (
                                        <h3 className="loser">LOSER</h3>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
                }

                <br/>
                {(!this.state.match3Ended && this.state.match3winner === "") &&
                (
                    <div id="FlipM3">
                        <h2 className="match">Match 3</h2>
                        <div className="row">
                            <div className="col-sm-2">
                                <img className="BPlogo" src={ require ("../img/Beersbee_logo-e1382410838990.jpg")}/>
                            </div>
                            <div className="col-sm-4">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.endMatch3Team2}
                                    name="team2"
                                >
                                    <h3>Keenan Hahn</h3>
                                    <hr/>
                                    <h3>James Moresco</h3>
                                </button>

                            </div>
                            <div className="col-sm-2">
                                <div className="vs"> </div>

                            </div>
                            <div id="right-col" className="col-sm-4">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.endMatch3Team3}

                                    name="team3"
                                ><h3>Matthew Lupello</h3>
                                    <hr/>
                                    <h3>Austin Torrey</h3>
                                </button>

                            </div>
                        </div>
                    </div>
                )
                }
                {(this.state.match3Ended && this.state.match3winner !=="") &&
                (
                    <div id="FlipM3">
                        <h2 className="match">Match 3</h2>
                        <div className="row">
                            <div className="col-sm-2">
                                <img className="BPlogo" src={ require ("../img/Beersbee_logo-e1382410838990.jpg")}/>
                            </div>
                            <div className="col-sm-4">
                                <button
                                    className="btn btn-primary"

                                    disabled
                                ><span id="gameover">
                                        <h3>Keenan Hahn</h3>
                                        <hr/>
                                        <h3>James Moresco</h3>
                                    </span>
                                </button>
                                {
                                    this.state.match3winner === "team2" &&
                                    (
                                        <h3 className="winner">WINNER</h3>
                                    )
                                }
                                {
                                    this.state.match3winner === "team3" &&
                                    (
                                        <h3 className="loser">LOSER</h3>
                                    )
                                }
                            </div>
                            <div className="col-sm-2">
                                <div className="vs"> </div>

                            </div>
                            <div id="right-col" className="col-sm-4">
                                <button
                                    className="btn btn-primary"

                                    disabled
                                ><h3>Matthew Lupello</h3>
                                    <hr/>
                                    <h3>Austin Torrey</h3>
                                </button>
                                {
                                    this.state.match3winner === "team3" &&
                                    (
                                        <h3 className="winner">WINNER</h3>
                                    )
                                }
                                {
                                    this.state.match3winner === "team2" &&
                                    (
                                        <h3 className="loser">LOSER</h3>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        )
    }
}



export default Beersbee;
