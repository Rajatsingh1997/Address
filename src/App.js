import "./App.css";
import Home from "./Components/Home";
import Info from "./Components/Info";
import { HashRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info/:country" component={Info} />

        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
