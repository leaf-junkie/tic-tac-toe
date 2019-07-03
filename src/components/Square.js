import React, { Component } from 'react'
// import x from './../utils/mongoose.png'
// import o from './../utils/cobra.jpg'

const squareStyle = {
    width: '10rem',
    height: '10rem',
    border: '1px solid #333',
    display: 'inline-block',
    lineHeight: '30px',
    margin: '0 auto',
    cursor: 'pointer'
}

class Square extends Component {
    constructor() {
        super()
        this.state = {
            // board: Array(9).fill('X')
        }
    }

    render() {
        return (
            <div style={squareStyle}></div>
        )
    }
}

export default Square