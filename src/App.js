import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Company from "./components/Pages/Company";
import Boards from "./components/Pages/Boards";
import Business from "./components/Pages/Business";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/company" exact component={Company} />
          <Route path="/business" exact component={Business} />
          <Route path="/boards" exact component={Boards} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
