import React, { Component } from 'react'
import PlayBtn from './PlayBtn'
import { Form } from 'react-bootstrap'

const formStyle = {
    width: '100%',
    position: 'relative', 
    margin: '0 auto'
}

export default class Select extends Component {
    render() {
        return (
            <div>
                <h3>Player 1, choose your side</h3>  
                <Form 
                style={formStyle}
                onSubmit={(event) => this.startGame(event)}
                >
                {['radio'].map(type => (
                    <div key={`inline-${type}`} className='mb-3'>
                    <Form.Check inline label='Mongoose' type={type} id={`inline-${type}-1`} style={{display:'inline', margin:'1vw'}} />
                    <Form.Check inline label='Cobra' type={type} id={`inline-${type}-2`} style={{display:'inline', margin:'1vw'}} />
                    </div>
                ))}
                <PlayBtn type='submit'>Play</PlayBtn>
                </Form>         
            </div>
        )
    }
}