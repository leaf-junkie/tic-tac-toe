import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Mongoose from './../utils/mongoose.png'
import Cobra from './../utils/cobra.jpg'

const boardStyle = {
    display: 'inline-flex',
    flexWrap: 'wrap',
    width: '40rem',
    height: '40rem',
    position:'relative',
    top: '-20vh',
}

const scoreboardStyle = {
    width: '20vw',
    height: '15vh',
    position: 'relative',
    left: '40vw',
    top: '48vh',
    border: '1px solid #cecece',
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px #e1e1e1'
}

const squareStyle = {
    width: '12rem',
    height: '12rem',
    display: 'inline-block',
    margin: '0 auto',
    cursor: 'pointer',
    border: '1px solid #cecece',
    fontSize: '5rem',
    fontFamily: "'Comfortaa', cursive",
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px #e1e1e1',
}

const btnStyle = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontSize: '1.2rem',
    height: 48,
    padding: '0 30px',
    marginTop: '0',
    cursor: 'pointer'
}

export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: Array(9).fill(null),
            player: 'X',
            currentImage: ''
        }
    }

    updateState(newState) {
        this.setState(newState);
        this.setState({
            currentImage: this.state.player === 'X' ? 
                Mongoose : Cobra
        });
    }

    // On win or on button click, reset game
    resetGame = (event) => {
        if (this.square !== null) {
            this.updateState({
                player: 'X',
                board: Array(9).fill(null),
            })
        }
    }

    // On click, check for winner
    checkStatus(props) {
        let series = [
            ['0', '1', '2'],
            ['3', '4', '5'],
            ['6', '7', '8'],
            ['0', '3', '6'],
            ['1', '4', '7'],
            ['2', '5', '8'],
            ['0', '4', '8'],
            ['2', '4', '6'],
        ]

        for (let i = 0; i < series.length; i++) {
            const [x, y, z] = series[i];
            if (
                this.state.board[x] 
                && this.state.board[x] === this.state.board[y] 
                && this.state.board[x] === this.state.board[z]
            ) {
                alert(`Player ${this.state.player} wins!`);
                this.resetGame();
            }
        }
    }

    // Update state of clicked square
    handleClick(index) {
        let newBoard = this.state.board
        if (this.state.board[index] === null ) {
            newBoard[index] = this.state.player
            this.updateState({
                board: newBoard,
                player: this.state.player === 'X' ? 'O' : 'X'
            })
            this.checkStatus()
        }
    }

    render() {
            
        return (
            <Container>
                <div style={scoreboardStyle}>
                    <h3 style={{ fontSize: '2rem' }}>It's {this.state.player}'s turn</h3>
                    <button style={btnStyle} onClick={this.resetGame}>Reset</button>
                    <p style={{ color: '#9d9d9d', marginTop:'5px' }}>Reset game?</p>
                </div>

                <div style={boardStyle}>
                    {this.state.board.map((square, index) => {
                        let imageSrc;
                        if (square === 'X') imageSrc = Mongoose;
                        else if (square === 'O') imageSrc = Cobra;
                        else imageSrc = '';
                        return <div 
                            className='square'
                            style={squareStyle} 
                            key={this.index} 
                            onClick={event => this.handleClick(index)}><img src={ imageSrc } style={{position:'relative', top:'10%', margin:'0 auto', width:'8rem'}}></img></div> 
                    })}
                </div>
            </Container>
        )
    }
}
