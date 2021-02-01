import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Followers from '../pages/Followers';
import Following from '../pages/Following';
import Repositories from '../pages/Repositories';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home/:login" component={Home} />
    <Route path="/:login/followers" component={Followers} />
    <Route path="/:login/following" component={Following} />
    <Route path="/:login/repos" component={Repositories} />
  </Switch>
)

export default Routes;