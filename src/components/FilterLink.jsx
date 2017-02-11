import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setFilter } from '../actions';
import { List } from 'semantic-ui-react';

@connect(mapStateToProps, mapDispatchToProps)

export default class FilterLink extends Component {
    render() {
        const {
          active
          , children
          , onClick
        } = this.props;

        if (active) {
            return (
              <List link>
                  <List.Item active>{children}</List.Item>
              </List>
          );
        }

        return (
          <List link onClick={onClick}>
              <List.Item as='a'>{children}</List.Item>
          </List>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === state.filter
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClick: () => dispatch(setFilter(ownProps.filter))
    };
}
