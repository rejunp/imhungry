import React, { Component,Fragment }from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import Post from './components/Post';
import Header from './components/Header';

const App = () => (
  <Fragment>
    <Header />

    <main className="my-5 py-5">
      <Container className="px-0">
        <Row >
          <Col xs={{ order: 1 }} md={{ size: 12 }} tag="section" >
            <Post />
          </Col>


        </Row>
      </Container>
    </main>

  </Fragment>
);
/*
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/

export default App;
