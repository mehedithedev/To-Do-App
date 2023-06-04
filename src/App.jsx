import React, {Component} from "react";
import CardList from "./Components/CardList";

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
        })
      );
  }

  render() {
    return (
      <div>
        <CardList>
            <h1>Mehedi</h1>
        </CardList>

        {this.state.monsters.map((monster) => (
          <h1>{monster.name}</h1>
        ))}
      
      </div>
    );
  }
}

export default App;