import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Mongoose from './../utils/mongoose.png'
import Cobra from './../utils/cobra.jpg'

const boardStyle = {
    display: 'inline-flex',
    flexWrap: 'wrap',
    width: '34rem',
    height: '34rem',
    position:'relative',
    top: '-20vh',
}

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

const squareStyle = {
    width: '10rem',
    height: '10rem',
    display: 'inline-block',
    margin: '0 auto',
    cursor: 'pointer',
    border: '1px solid #888',
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px #ebebeb',
}

const btnStyle = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop: '2rem',
    cursor: 'pointer'
}

export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: Array(9).fill(null),
            player: 'X',
        }
    }

    resetGame = (event) => {
        // event.preventDefault()
        console.log('game reset')
    
        if (this.square !== null) {
            this.setState({
                player: 'X',
                board: Array(9).fill(null),
            })
        }
    }

    checkStatus(props) {
        let series = [
            ["0", "1", "2"],
            ["3", "4", "5"],
            ["6", "7", "8"],
            ["0", "3", "6"],
            ["1", "4", "7"],
            ["2", "5", "8"],
            ["0", "4", "8"],
            ["2", "4", "6"],
        ]

        for (let i = 0; i < series.length; i++) {
            const [x, y, z] = series[i];
            if (this.state.board[x] === this.state.board[y] && this.state.board[z]) {
                alert(`Player ${this.state.player} wins!`);

                this.resetGame();
            }
        }
    }

    handleClick(index) {
        let newBoard = this.state.board
        
        if (this.state.board[index] === null) {
            newBoard[index] = this.state.player

            this.setState({
                board: newBoard,
                player: this.state.player === 'X' ? 'O' : 'X'
            })
            this.checkStatus()
        }
    }

    victoryScreen = (props) => {

    }



    render() {
            
        return (
            <Container>
                <div style={scoreboardStyle}>
                    <h3>This turn: {this.state.player}</h3>
                    <button style={btnStyle} onClick={this.resetGame}>Reset</button>
                    <p>Reset game?</p>
                </div>

                <div style={boardStyle}>
                    {this.state.board.map((square, index) => 
                        <div 
                        className='square'
                        style={squareStyle} 
                        key={this.index} 
                        onClick={event => this.handleClick(index)}>{square}</div> 
                    )}
                </div>
            </Container>
        )
    }
}
