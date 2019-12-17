import React, {Component} from 'react';
import './App.css';
import SwapiData from './SwapiData';
import SearchBar from './SearchBar';



class App extends Component {
  constructor() {
      super();
      this.state = {
          category: '',
          searchfield: 0
      }
  }

  onInputChange = (event) => {
    this.setState({searchfield: event.target.value})
}

  onCategoryChange = (event) => {
    this.setState({category: event.target.value.toLowerCase()})
  }

  onClick = (event) => {
    SwapiData(this.state.category, this.state.searchfield)
  }

  onClickRandom = () => {
    let randNum = 0;
    switch(this.state.category) {
      case 'people':
        randNum = Math.floor(Math.random() * 88);
        SwapiData(this.state.category, randNum)
        break;
      case 'planets':
        randNum = Math.floor(Math.random() * 62);
        SwapiData(this.state.category, randNum)
        break;
      case 'films':
        randNum = Math.floor(Math.random() * 8);
        SwapiData(this.state.category, randNum)
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
        <footer>All Star Wars information provided is thanks to the swapi API at https://swapi.co/</footer>
        {console.log(this.state.searchfield)}
        {console.log(this.state.category)}
      </div>
      
  );
  }
  
}

export default App;
