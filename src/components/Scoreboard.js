import React, { Component } from 'react'
import ResetBtn from './ResetBtn';

const scoreboardStyle = {
    width: '15vw',
    height: '20vh',
    position: 'relative',
    left: '15vw',
    top: '0',
    border: '1px solid #888',
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px #ebebeb'
}

export default class Scoreboard extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         player: this.state.player
    //     }
    // }

    // updateScoreboard(index) {
    //     let newPlayer = this.state.player
        
    //     newPlayer = this.state.player === 'X' ? 'O' : 'X'
    
    //     this.setState({
    //         player: newPlayer
    //     })
    // }

    render() {
        
        return (
            <div>
                <div style={scoreboardStyle}>
                    <h3>Next turn: {this.player}</h3>

                    {/* <ResetBtn /> */}
                    <p>Reset game?</p>
                </div>
            </div>
        )
    }
}