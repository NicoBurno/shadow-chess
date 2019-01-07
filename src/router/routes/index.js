// @flow

import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'pages/home';

export default () => (
    <Switch>
        <Route path="/" component={HomePage} />
        <Redirect to="/" />
    </Switch>
);
