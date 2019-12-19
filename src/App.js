import React, {Component} from 'react';
import './App.css';
import {SwapiData} from './util';
import SearchBar from './SearchBar';
import ResultDisplay from './ResultDisplay';

class App extends Component {
  constructor() {
      super();
      this.onResultsChange = this.onResultsChange.bind(this);
      this.state = {
          category: '',
          searchfield: 0,
          results: 'Nothing to show yet.'
      }
  }

  onInputChange = (event) => {
    this.setState({searchfield: event.target.value})
}

  onCategoryChange = (event) => {
    this.setState({category: event.target.value.toLowerCase()})
  }

  onClick = () => {
    SwapiData(this.state.category, this.state.searchfield)
  }

  onResultsChange = (swapiResult) => {
    this.setState({ results: swapiResult })
  }

  onClickRandom = () => {
    let randNum = 0;
    let categoryState = this.state.category;
    let passResultToState = '';
    this.setState({results: passResultToState});
    switch(this.state.category) {
      case 'people':
        async function people(){
          randNum = Math.floor(Math.random() * 88);
          const result = await SwapiData(categoryState, randNum);
          console.log('I am a result', result)
          passResultToState = result;
        }
        people();
        break;
      case 'planets':
        async function planets() {
          randNum = Math.floor(Math.random() * 62);
          SwapiData(categoryState, randNum);
        }
        planets()
        break;
      case 'films':
        async function films() {
          randNum = Math.floor(Math.random() * 8);
          SwapiData(categoryState, randNum);
        }
        films()
        break;
      case 'species':
        randNum = Math.floor(Math.random() * 38);
        SwapiData(this.state.category, randNum)
        break;
      case 'vehicles':
        randNum = Math.floor(Math.random() * 40);
        SwapiData(this.state.category, randNum)
        break;
      case 'starships':
        alert('Sorry, but \'Surprise me\' unfortunately doesn\'t work with Starships.')
        break;
      default:
        alert('Sorry, something seems to have gone wrong, please try again.')
    }
  }

  render() {
   
    return (
      <div className="App">
        <header>Star Wars Encyclopedia</header>
        <div>
          <SearchBar searchInput={this.onInputChange} listSelector={this.onCategoryChange} fetchData={this.onClick} randomData={this.onClickRandom}/>
        </div>
        <div>
          <ResultDisplay swapiData={this.state.results}/>
        </div>
        <footer>All Star Wars information provided is thanks to the swapi API at https://swapi.co/</footer>
        {console.log('searchfield: ', this.state.searchfield)}
        {console.log('category: ', this.state.category)}
        {console.log('results: ', this.state.results)}
      </div>
      
  );
  }
  
}

export default App;
