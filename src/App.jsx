import React from "react";
const App = () => {

    return(
        <React.Fragment>
            <h1>To-Do App</h1>
            <input type="text" placeholder="Add a To-Do" />
            <button>Add</button>
            <ul>
                <li>Learn React</li>
                <li>Learn Firebase</li>
                <li>Learn GraphQL</li>
            </ul>


        </React.Fragment>
    )
}
export default App;