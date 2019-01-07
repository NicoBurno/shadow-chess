// @flow

import * as React from 'react';

import Router from 'router';
import Routes from 'router/routes';

import MainLayout from 'layouts/main';

type Props = {||};

export default class App extends React.Component<Props> {
    render() {
        return (
            <Router>
                <MainLayout>
                    <Routes />
                </MainLayout>
            </Router>
        );
    }
}
