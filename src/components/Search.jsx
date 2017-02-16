import React, { Component } from 'react';
import {connect} from 'react-redux';
import { searchUser } from '../actions';

import { Input } from 'semantic-ui-react'

@connect(mapStateToProps, mapDispatchToProps)

export default class Search extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }

  state = {
    searchValue: ''
  }

  handleSearch(e) {
    this.props.onHandleSearch(e.target.value)
  }

  render() {
    return (
        <Input
          label='Search employee: '
          placeholder='by name'
          onChange={this.handleSearch}
        />
    )
  }
}

function mapStateToProps(state) {
    return {
        state: state.users.filter(user => user.name.includes(state.searchUser))
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onHandleSearch: (name) => {
          dispatch(searchUser(name))
        }
    };
}
