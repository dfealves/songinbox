import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Partner from './pages/Partner';
import Support from './pages/Support';
import PreviousBox from './pages/PreviousBox';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={About} />
        <Route path="/partner" component={Partner} />
        <Route path="/support" component={Support} />
        <Route path="/previousbox" component={PreviousBox} />
      </Switch>
    </BrowserRouter>
  );
}
