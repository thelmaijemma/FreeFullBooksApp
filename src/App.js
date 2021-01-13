import './App.css';
import React, { Component} from 'react';
import FreeFullBooksApp from './FreeFullBooksApp';
import Header from './Header';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showResults: false
    };
  }

  showResults(show) {
    this.setState({
      showResults: show
    });
  }

  changeScreen(titles){
    const titlesFormatted = titles;
    console.log(titlesFormatted)
  }

render(){
  const results = this.state.showResults;
  return (
    <div>
      <Header></Header>
  <FreeFullBooksApp
  showResults={show => this.showResults(show)}
  changeScreen= {titles => this.changeScreen(titles)}
  ></FreeFullBooksApp>
     {results
               ? <div>{this.titlesFormatted}</div>
              : <div></div>
              } 
                 </div>
  )
}
}

export default App;
