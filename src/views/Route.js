import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Home';
import Search from './Search';
import Collection from './Collection';

const Route = () => {
  return (
    <Router>
      <Switch>

        <Route path="/Home" element={<Home />}/>
        <Route path="/Collection" element={<Collection />}/>
        <Route path="/Search" element={<Search />}/>

      </Switch>
    </Router>
  )
}

export default Route