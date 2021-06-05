import { Switch, Route } from "react-router-dom";
import Navbar from './components/NavBar';
import About from "./pages/About";
import Category from "./pages/Category";
import Job from "./pages/Job";
import Home from "./pages/Home";
import Things from "./pages/Things";

function App() {
  return (
    <>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/job" component={Job} />
        <Route exact path="/about" component={About} />
        <Route exact path="/things" component={Things} />
      </Switch>
    </>
  );
}

export default App;
