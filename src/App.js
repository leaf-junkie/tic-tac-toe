import React, {Component} from 'react'
import './App.css'
import Header from './components/Header'
import PlayBtn from './components/PlayBtn'
import Scoreboard from './components/Scoreboard'
import Board from './components/Board'
import Footer from './components/Footer'
import { Container, Form } from 'react-bootstrap'

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

const formStyle = {
  width: '100%',
  position: 'relative', 
  margin: '0 auto'
}

export default class App extends Component {

  startGame(event) {
    event.preventDefault()

  }

  toggleSide(event) {
    event.preventDefault()
    if (this.props.form(event.target.player.value)) {

    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <div>
            <h3>Player 1, your side</h3>  
            <Form 
            style={formStyle}
            onSubmit={(event) => this.startGame(event)}
            >
              {['radio'].map(type => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check inline label="Mongoose" type={type} id={`inline-${type}-1`} style={{display:'inline', margin:'1vw'}} />
                  <Form.Check inline label="Cobra" type={type} id={`inline-${type}-2`} style={{display:'inline', margin:'1vw'}} />
                </div>
              ))}
              <PlayBtn stype='submit' style={btnStyle}>Play</PlayBtn>
            </Form>         
          </div>
        </Container>
        <Container style={{position:'relative', top:'8vh'}}>
          <Board />
        </Container>

        <Footer />
      </div>
    );
  }
}
