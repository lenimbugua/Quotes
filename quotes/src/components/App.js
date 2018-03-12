import React from 'react'
import QuoteNavbar from './QuoteNavbar.js'
import JumbotronQuote from './JumbotronQuote.js'

export default class App extends React.Component{
  render(){
    return(
      <div>
        <QuoteNavbar />,
        <JumbotronQuote />
      </div>
    );
  }
}
