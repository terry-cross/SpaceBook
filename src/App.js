import { Switch, Route } from "react-router-dom";
import About from "./views/About";
import MessageList from "./views/MessageList";
import Profile from "./views/Profile";
import MessageItem from "./components/MessageItem";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/views/MessageList" component={MessageList} />

        <Route exact path="/messages/:id" component={MessageItem} />

        <Route exact path="/profile" component={Profile} />

        <Route exact path="/views/About" component={About} />

        <Route exact path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
