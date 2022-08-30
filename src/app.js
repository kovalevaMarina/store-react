import React from "react";
import Header from 'components/Header';
import User from "components/User";
import CreateTask from "components/CreateTask";
import ListTask from "components/ListTask";

const App = () => {
    return (
         <div>
              <h1>Webpack</h1>
              <Header/>
              <User/>
              <CreateTask/>
             <ListTask/>
         </div>
    )
}

export default App;
