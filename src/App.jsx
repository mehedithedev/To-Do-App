import React, {Component} from "react";




class App extends Component{
    constructor(){
        super();
        this.state= {
           monsters: {name: "Badman"},
           monsters: {name: "Quirks"},
           monsters: {name: "Undertiger"},
        }
    }
    render(){
        return(
           <div>
             
            {
                this.state.monsters.map(monster =>(
                    <h1>{monster.name}</h1>
                ))
            }

           </div>
        )
    }
}
export default App;