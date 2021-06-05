import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from './components/NavBar';
import Category from "./pages/Category";
import About from "./pages/About";
import Jobs from "./pages/Job";
import Item from "./components/Item";

import {Container} from 'semantic-ui-react';

function App() {
  return (
    <>
    <Navbar />
     <Container>
       <Switch>
         <Route exact path='/' component={Home} />
         <Route exact path='/categories' component={Category} />
         <Route exact path='/items' component={Item} />
         <Route exact path='/jobs/:id' component={Jobs} />
         <Route exact path='/about' component={About} />
        </Switch>
     </Container>
    </>
  );
}

export default App;
