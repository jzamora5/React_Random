import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Disqus1 from "./Disqus1";
import Disqus2 from "./Disqus2";
import Disqus3 from "./Disqus3";
import NotFound from "./NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/disqus1" component={Disqus1} />
        <Route exact path="/disqus2" component={Disqus2} />
        <Route exact path="/disqus3" component={Disqus3} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
