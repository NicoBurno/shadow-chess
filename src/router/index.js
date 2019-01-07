// @flow

import * as React from 'react';
import { Router } from 'react-router-dom';

import type { RouterHistory } from 'react-router-dom';

import history from './history';

type Props = {
    history?: RouterHistory
};

export default (props: Props) => (
    <Router {...props} history={history} />
);
