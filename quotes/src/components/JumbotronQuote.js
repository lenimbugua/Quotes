import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import { Jumbotron, Button, Container } from 'reactstrap';

const JumbotronQuote = (props) => {
  return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h3 className="display-3">Socrates</h3>
            <p className="lead">
              The truth is always more powerful than love,
              because the love becomes powerless in the absence
              of Truth
            </p>
            <h1 className="display-3">Lenimbugua</h1>
            <p className="lead">
              this is the new year the new you. You can pass through
              another year, coasting on cruise control. Or you can step
              out of your comfort zone, trying things you have never done before,
              and make 2012 as the year that you elevate from where you are and soar
              high. make it happen!!
            </p>
          </Container>
        </Jumbotron>
      </div>
    );
  };

export default JumbotronQuote;
