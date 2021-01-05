import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainWindow from '../modules/MainWindow/view';

export interface IAppRouter {}
const AppRouter: React.FC<IAppRouter> = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainWindow} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
