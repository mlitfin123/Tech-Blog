import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Blog from './components/home';
import Header from './components/Header';
import Products from './components/Products';
import Services from './components/Services';
import Mission from './components/Mission';
import Jan112021 from './components/posts/January2021/jan112021';
import Jan2021 from './components/posts/January2021/january2021';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/mission" component={Mission} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/jan2021" component={Jan2021} />
        <Route exact path="/jan112021" component={Jan112021} />
      </Switch>
    </Router>
  );
}

export default App;
