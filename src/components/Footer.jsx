import React, { Component } from 'react';

import FilterLink from './FilterLink.jsx';

import {
  Grid
  , Rail
  , Segment
  , Sidebar
} from 'semantic-ui-react'

export default class Footer extends Component {
    render() {
        return (
          <Segment.Group horizontal>
            <Segment>
              <FilterLink filter="SHOW_ALL">All</FilterLink>
            </Segment>
            <Segment>
              <FilterLink filter="SHOW_NEW">New</FilterLink>
            </Segment>
            <Segment>
              <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
            </Segment>
        </Segment.Group>

        );
    }
}
