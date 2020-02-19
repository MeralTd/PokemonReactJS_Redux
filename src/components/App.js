import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Cards from './Cards';
import NotFound from './NotFound';
import GlobalStyle from './styles';

const App = () => {
  return (
    <BrowserRouter >
      <div className="App">
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={Cards} />

          { /* 404 */ }
          <Route exact path="/notfound" component={NotFound} />
          <Redirect to="/notfound" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;