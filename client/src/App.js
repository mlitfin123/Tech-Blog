import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Blog from './components/home';
import Header from './components/Header';
import Nov112020 from './components/posts/November2020/nov112020';
import Nov2020 from './components/posts/November2020/november2020';
import Products from './components/Products';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/nov2020" component={Nov2020} />
        <Route exact path="/Nov112020" component={Nov112020} />
      </Switch>
    </Router>
  );
}

export default App;
