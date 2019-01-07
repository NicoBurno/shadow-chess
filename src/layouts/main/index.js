// @flow

import * as React from 'react';

import './styles.less';

type Props = {
    children: React.Node
}

export default class MainLayout extends React.Component<Props> {
    render() {
        return (
            <div styleName="main-layout">
                <div>
                    Welcome to Shadow Chess
                </div>
                {this.props.children}
            </div>
        );
    }
}
