import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          {/* <Route path='/character/:character_name' component={Post} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
