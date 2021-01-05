import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CaptureImageList from '../modules/CaptureImageList/view';
import MainWindow from '../modules/MainWindow/view';

export interface IAppRouter {}
const AppRouter: React.FC<IAppRouter> = (props) => {
  return (
    <Router>
      <Link to="/">MainWind</Link>
      <Link to="/captureImageList">CaptureImageList</Link>
      <Switch>
        <Route path="/" component={MainWindow} />
        <Route path="/captureImageList" component={CaptureImageList} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
