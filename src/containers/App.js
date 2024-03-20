//import Card from './components/Card';
import 'tachyons'
import robots from '../robots.json';
import CardList from '../components/CardList.js';
import SearchBox from '../SearchBox.js';
import react from 'react';
import './App.css';

class App extends react.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }
  render() {
    const { robots, searchField } = this.state
    const filtered = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    })
    return !robots.length ? <h1>LOADING...</h1> :

      (
        <div className='tc'>
          <h1>RoboBuddies</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filtered} />
        </div>

      );
  }

}

/*
function App() {
  return (
    <div className='tc'>
      <h1>RoboBuddies</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>

  );
}
*/
export default App;
