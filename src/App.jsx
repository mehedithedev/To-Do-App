import React, {Component} from "react";
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          monsters: users,
          searchField: ''
        })
      );
  }

  render() {

    const { monsters, searchField }= this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase() )
    )
    return (
      <div>
        <SearchBox
          placeholder='search monster'
          handleChange={e=>this.setState({searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters}/>    
      </div>
    );
  }
}

export default App;