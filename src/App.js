import React, {Component} from 'react';
import './App.css';
import {SwapiData} from './util';
import SearchBar from './SearchBar';
import ResultDisplay from './ResultDisplay';

class App extends Component {
  constructor() {
      super();
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

  onClickRandom = async () => {
    let randNum = 0;
    let categoryState = this.state.category;
    switch(this.state.category) {
      case 'people':
        randNum = Math.floor(Math.random() * 88);
        const person = await SwapiData(categoryState, randNum);
        this.setState({results: person});
        break;
      case 'planets':
        randNum = Math.floor(Math.random() * 62);
        const planet = await SwapiData(categoryState, randNum);
        this.setState({results: planet});
        break;
      case 'films':
        randNum = Math.floor(Math.random() * 8);
        const film = await SwapiData(categoryState, randNum);
        this.setState({results: film});
        break;
      case 'species':
        randNum = Math.floor(Math.random() * 38);
        const species = await SwapiData(categoryState, randNum);
        this.setState({results: species});
        break;
      case 'vehicles':
        randNum = Math.floor(Math.random() * 40);
        const vehicle = await SwapiData(categoryState, randNum);
        this.setState({results: vehicle});
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
        <div className="search-bar">
          <SearchBar searchInput={this.onInputChange} listSelector={this.onCategoryChange} fetchData={this.onClick} randomData={this.onClickRandom}/>
        </div>
        <div className="results">
          <ResultDisplay swapiData={this.state.results} type={this.state.category}/>
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
