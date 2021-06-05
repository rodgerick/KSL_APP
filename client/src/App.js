import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/NavBar';
import Category from "./components/Category";
import About from "./pages/About";
import Jobs from "./pages/Job";
import CategoryView from "./components/CategoryView";

function App() {
  return (
    <>
    <Navbar />
     
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/categories' component={Category} />
         <Route exact path="/api/categories/:id" component={CategoryView} />
         <Route exact path='/jobs/:id' component={Jobs} />
         <Route exact path='/about' component={About} />
        </Switch>
    </>
  );
}

export default App;
