import React, {Component} from 'react';
import './App.css';
import {SwapiDataString, peopleCategory, planetCategory, filmCategory, speciesCategory, vehiclesCategory, SwapiDataNumber} from './util';
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
    this.setState({resultNumber: 0})
    const result = await SwapiDataString(this.state.category, this.state.searchfield);
    this.setState({resultString: result})
  }

  onClickRandom = async () => {
    try { 
      this.setState({resultString: ''})
      const result = await SwapiDataNumber(this.state.category);
      this.setState({resultNumber: result})
    } catch {
      alert('Sorry, something went wrong.')
    }
  }

  onClickDetails = async (event) => {
    const eventTargetValue = event.target.value;
    console.log('the result ', this.state.resultString)
    let categorySelector = '';

    switch (this.state.category) {
      case 'people':
        categorySelector = peopleCategory;
        break;
      case 'planets':
        categorySelector = planetCategory;
        break;
      case 'films':
        categorySelector = filmCategory;
        break;
      case 'vehicles':
        categorySelector = vehiclesCategory;
        break;
      case 'starships':
      categorySelector = vehiclesCategory;
      break;
      case 'species':
        categorySelector = speciesCategory;
        break;
      default:
        break;
    }
   
    const result = eventTargetValue === 'random' 
    ? await categorySelector(this.state.category, this.state.resultNumber) 
    : await categorySelector(this.state.category, this.state.resultString, [eventTargetValue])
    
    console.log('result ', result)
    eventTargetValue === 'random'
    ? this.setState({resultNumber: result})
    : this.setState({resultString: result})
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
      </div>
      
  );
  }
  
}

export default App;
