import React, { Component } from 'react';

import FilterLink from './FilterLink.jsx';
import { Button } from 'semantic-ui-react'

import styles from './Footer.less';

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.root}>
              <Button>
               Click Here
              </Button>
                <FilterLink filter="SHOW_ALL">All</FilterLink>
                <FilterLink filter="SHOW_NEW">New</FilterLink>
                <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
            </div>
        );
    }
}
