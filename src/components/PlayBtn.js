import React, { Component } from 'react'

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


export default class PlayBtn extends Component {

    startGame = (event) => {
        event.preventDefault();
        console.log('Start game')
    
        this.setState({
            player: 'X',
            square: '',
            status: null
        })
    }

    render() {
        return (
            <button
                style={btnStyle}
                onClick={this.startGame}
            >
                Play
            </button>
        )
    }
}
