import React, {Component} from 'react'
import './App.css'
import Header from './components/Header'
import Board from './components/Board'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

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
        </Container>
        <Container style={{position:'relative', top:'8vh'}}>
          <Board />
        </Container>
        <Footer />
      </div>
    );
  }
}
