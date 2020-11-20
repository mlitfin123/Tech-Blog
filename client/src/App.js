import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Nav from './components/nav';
import Nov112020 from './components/posts/November2020/nov112020';
import Nov2020 from './components/posts/November2020/november2020';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/nov2020" component={Nov2020} />
        <Route exact path="/Nov112020" component={Nov112020} />
      </Switch>
    </Router>
  );
}

export default App;
