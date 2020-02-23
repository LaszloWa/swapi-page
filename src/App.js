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

  onClickDetails = async (event) => {
    
    const eventTargetValue = event.target.value;
    console.log(this.state.detailsResolved)

    if (this.state.detailsResolved.includes(eventTargetValue)) {
      console.log('Already pressed the button')
    } else {
      console.log('the result ', this.state.resultString)
      let categorySelector = '';
      const retrievedDetails = this.state.detailsResolved
      retrievedDetails.push(eventTargetValue);

      this.setState({detailsResolved: retrievedDetails})

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
            <p>All Star Wars information provided is thanks to the swapi API at https://swapi.co/</p>
            <p>This app was built by <a className='portfolioLink' href='www.laswag.dev'>LasWa</a></p>

            </footer>
        </div>
        <div className='stars'></div>
        <div className='twinkling'></div>
      </div>
      
  );
  }
  
}

export default App;
