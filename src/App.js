import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SingleCharacter from "./pages/SingleCharacter";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:character_name" component={SingleCharacter} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
