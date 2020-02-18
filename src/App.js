import React, {Component} from 'react';
import './App.css';
import {SwapiDataString, peopleCategory, planetCategory, filmCategory, speciesCategory, vehiclesCategory} from './util';
import SearchBar from './SearchBar';
import ResultDisplay from './ResultDisplay';

class App extends Component {
  constructor() {
      super();
      this.state = {
          category: '',
          searchfield: 0,
          resultString: '',
          resultNumber: 0
      }
  }

  onInputChange = (event) => {
    this.setState({searchfield: event.target.value})
}

  onCategoryChange = (event) => {
    this.setState({category: event.target.value.toLowerCase(), resultNumber: 0, resultString: ''})
  }

  onClick = async () => {
    const result = await SwapiDataString(this.state.category, this.state.searchfield);
    this.setState({resultString: result})
  }

  onClickDetails = async (event) => {
    //const isRandom = false;
    // you want to recycle the functions you made for onClickRandom to fetch e.g. all info for people results. Not sure how to implement that yet though...
  }

  onClickRandom = async () => {
    try { 
      let randNum = 0;
      let categoryState = this.state.category;
      const isRandom = true;
      switch(this.state.category) {
        case 'people':
          randNum = Math.floor(Math.random() * 88);
          const people = await peopleCategory(categoryState, randNum, isRandom);
          this.setState({resultNumber: people});
          break;
        case 'planets':
          randNum = Math.floor(Math.random() * 62);
          const planet = await planetCategory(categoryState, randNum, isRandom);
          this.setState({resultNumber: planet});
          break;
        case 'films':
          randNum = Math.floor(Math.random() * 8);
          const film = await filmCategory(categoryState, randNum, isRandom);
          this.setState({resultNumber: film});
          break;
        case 'species':
          randNum = Math.floor(Math.random() * 38);
          const species = await speciesCategory(categoryState, randNum, isRandom);
          this.setState({resultNumber: species});
          break;
        case 'vehicles':
          randNum = Math.floor(Math.random() * 40);
          const vehicle = await vehiclesCategory(categoryState, randNum, isRandom);
          this.setState({resultNumber: vehicle});
          break;
        case 'starships':
          alert(`Sorry, but 'Surprise me' unfortunately doesn't work with Starships.`)
          break;
        default:
          alert('Sorry, something seems to have gone wrong, please try again.')
      }
    } catch {
      alert('Sorry, something went wrong.')
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
          <ResultDisplay resultNumber={this.state.resultNumber} resultString={this.state.resultString} type={this.state.category} fetchDetails={this.onClickDetails}/>
        </div>
        <p>Please note that some categories, such as vehicles, frequently contain a non-valid result when using 'Surprise me', as the database contains gaps in its indexing.</p>
        <footer>All Star Wars information provided is thanks to the swapi API at https://swapi.co/</footer>
        {/* {console.log('searchfield: ', this.state.searchfield)}
        {console.log('category: ', this.state.category)}
        {console.log('results: ', this.state.results)} */}
      </div>
      
  );
  }
  
}

export default App;
