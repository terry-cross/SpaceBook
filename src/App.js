import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Profile from './views/Profile';
import Messages from './views/MessageList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/messages" component={MessageList} />
        <Route exact path="/profile" component={Profile} />
        <Route component={NotFound} />
        
      </Switch>
    </div>
  
  );
}

export default App;
