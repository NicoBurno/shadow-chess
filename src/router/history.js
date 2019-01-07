// @flow

// $FlowFixMe react-router-dom + history (incompatible)
import createBrowserHistory from 'history/createBrowserHistory';

import type { RouterHistory } from 'react-router-dom';

export default ((): RouterHistory => {
    return createBrowserHistory();
})();
