import React, {Component} from 'react';
import './App.css';
import './stars.css';
import {SwapiDataString, peopleCategory, planetCategory, filmCategory, speciesCategory, vehiclesCategory, SwapiDataNumber} from './util';
import SearchBar from './SearchBar';
import ResultDisplay from './ResultDisplay';
import TitleLogo from './images/StarWarsLogo.png'

class App extends Component {
  constructor() {
      super();
      this.state = {
          category: '',
          searchfield: 0,
          resultString: '',
          resultNumber: 0,
          detailsResolved: [],
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
    this.setState({resultString: result, detailsResolved: []})
  }

  onClickRandom = async () => {
    try { 
      this.setState({resultString: ''})
      const result = await SwapiDataNumber(this.state.category);
      this.setState({resultNumber: result, detailsResolved: []})
    } catch {
      alert('Sorry, something went wrong.')
    }
  }

  // Action triggered by button 'Display details', which resolves the urls that are given as results in the targeted object.
  onClickDetails = async (event) => {
    
    const eventTargetValue = event.target.value;
    console.log(this.state.detailsResolved)

    if (this.state.detailsResolved.includes(eventTargetValue)) {
      // This is to avoid calling the fetch method for details twice, which would result in a network error.
    } else {
      let categorySelector = '';
      
      // this stores the index of the targeted object, so that it can't be triggered twice
      const retrievedDetails = this.state.detailsResolved
      retrievedDetails.push(eventTargetValue);
      this.setState({detailsResolved: retrievedDetails})

      // passes the correct function to fetch the data into the below ternary operator 'result'
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
    
      // passes different arguments depending on whether the initial result was returned randomly or selectively, because selective queries can contain more than 1 result, whereas random queries only contain 1 result
      const result = eventTargetValue === 'random' 
      ? await categorySelector(this.state.category, this.state.resultNumber) 
      : await categorySelector(this.state.category, this.state.resultString, [eventTargetValue])
      
      eventTargetValue === 'random'
      ? this.setState({resultNumber: result})
      : this.setState({resultString: result})
    } 
  }

  render() {
    return (
      <div className="App">
        <header className='appTitle'>
          <img className='StarWarsLogo' src={TitleLogo} alt='Star Wars logo'>
          </img>
        </header>
        <div className="search-bar">
          <SearchBar searchInput={this.onInputChange} listSelector={this.onCategoryChange} fetchData={this.onClick} randomData={this.onClickRandom}/>
        </div>
        <div className='appBody'>
          <div className="results">
            <ResultDisplay resultNumber={this.state.resultNumber} resultString={this.state.resultString} type={this.state.category} fetchDetails={this.onClickDetails}/>
          </div>
          <p className='resultHint'>Please note that some categories, such as vehicles, frequently contain a non-valid result when using 'Surprise me', as the database contains gaps in its indexing.</p>
          <footer className='footer'>
            <p>All Star Wars information provided by <a className='links' href='https://swapi.co/'>SWAPI</a></p>
            <p>Background courtesy of <a className='links' href='http://www.script-tutorials.com/'>Script Tutorials</a></p>
            <p>This app was built by <a className='links' href='www.laswag.dev'>LasWa</a></p>

            </footer>
        </div>
        <div className='stars'></div>
        <div className='twinkling'></div>
      </div>   
    );
  }
}

export default App;
