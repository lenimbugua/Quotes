import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Jumbotron, Button, Container } from 'reactstrap';

export default class QuoteNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="purple" light>
          <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const Jumbotronquote = (props) => {
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

class App extends React.Component{
  render(){
    return(
      <div>
        <QuoteNavbar />,
        <Jumbotronquote />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
