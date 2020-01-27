import React from 'react';
import { Layout } from './components';
import { Top } from './pages';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/">
          <Top />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
