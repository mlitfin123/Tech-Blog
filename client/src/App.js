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
import Jan272021 from './components/posts/January2021/jan272021';
import Mar2021 from './components/posts/March2021/march2021';
import Mar192021 from './components/posts/March2021/mar192021';
import Mar292021 from './components/posts/March2021/mar292021';
import Mar312021 from './components/posts/March2021/mar312021';

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
        <Route exact path="/mar2021" component={Mar2021} />
        <Route exact path="/bootcamp" component={Jan112021} />
        <Route exact path="/react1" component={Jan272021} />
        <Route exact path="/loops" component={Mar192021} />
        <Route exact path="/firebase" component={Mar292021} />
        <Route exact path="/heroku" component={Mar312021} />
      </Switch>
    </Router>
  );
}

export default App;
