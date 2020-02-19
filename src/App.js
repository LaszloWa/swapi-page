import React, {Component} from 'react';
import './App.css';
import {SwapiDataString, peopleCategory, planetCategory, filmCategory, speciesCategory, vehiclesCategory, SwapiDataNumber, getPeople} from './util';
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
    this.setState({resultString: result.results})
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
    console.log('peeoopeeoopeeoo')
    const eventTargetValue = event.target.value;
    console.log('the result ', this.state.resultString)
    console.log(this.state.resultString.results)
    console.log(this.state.resultString[event.target.value])
    const result = await peopleCategory(this.state.category, this.state.resultString[eventTargetValue]);
    
    // eventTargetValue === 'random' 
    //   ? await peopleCategory(this.state.category, this.state.resultNumber)
    //   : await peopleCategory(this.state.category, this.state.resultString.results[eventTargetValue]);
    const resultArray = [result]
    const resultObject = {resultArray}
    console.log('result ', result)
    console.log(resultArray)
    // eventTargetValue === 'random' 
    //   ? this.setState({resultNumber: result})
    //   : this.setState({resultString: resultArray})
    this.setState({resultString: resultArray})
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
