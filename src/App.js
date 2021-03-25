import { Switch, Route } from "react-router-dom";

import MessageList from "./views/MessageList";

import Profile from "./views/Profile";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import { render } from "@testing-library/react";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/views/MessageList" component={MessageList} />

        <Route exact path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
