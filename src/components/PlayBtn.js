import React, { Component } from 'react'

const btnStyle = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontSize: '1.2rem',
    height: 48,
    padding: '0 30px',
    marginTop: '2rem',
    cursor: 'pointer'
}

const btnHover = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 65%)',
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

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         opacity: 1 
    //     }
    // }


    // toggleBtnStyle() {
    //     console.log(this.event.target)
    //     // this.event.target
    // }

    // startGame = (event) => {
    //     event.preventDefault();
    
    //     this.setState({
    //         player: 'X',
    //         square: null,
    //     })
    // }

    render() {
        return (
            <button
                className='btn'
                style={btnStyle}
                // onMouseEnter={this.toggleBtnStyle.bind(this)}
                // onMouseLeave={() => hoverBtn(false)}
                onClick={this.startGame}
            >
                Play
            </button>
        )
    }
}
