import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Partner from './pages/Partner';
import Support from './pages/Support';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={About} />
        <Route path="/partner" component={Partner} />
        <Route path="/support" component={Support} />
      </Switch>
    </BrowserRouter>
  );
}
