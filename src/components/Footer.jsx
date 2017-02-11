import React, { Component } from 'react';

import FilterLink from './FilterLink.jsx';

import {
  Grid
  , Rail
  , Segment
} from 'semantic-ui-react'

export default class Footer extends Component {
    render() {
        return (
          <Segment>
            <Grid centered columns={3}>
              <Grid.Column>
                <Rail dividing position='left'>
                  <FilterLink filter="SHOW_ALL">All</FilterLink>
                </Rail>
                <Rail dividing position='center'>
                  <FilterLink filter="SHOW_NEW">New</FilterLink>
                </Rail>
                <Rail dividing position='right'>
                  <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
                </Rail>
              </Grid.Column>
          </Grid>
        </Segment>

        );
    }
}
