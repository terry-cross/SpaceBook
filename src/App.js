import { Switch, Route } from "react-router-dom";
import About from "./views/About";
import MessageList from "./views/MessageList";
import Profile from "./views/Profile";
import MessageItem from "./components/MessageItem";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Users from "./views/Users";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/messages" component={MessageList} />

        <Route path="/messages/:id" component={MessageItem} />

        <Route path="/profile" component={Profile} />

        <Route exact path="/about" component={About} />

        <Route exact path="/users" component={Users} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
