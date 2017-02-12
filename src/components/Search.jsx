import React, { Component } from 'react';
import {connect} from 'react-redux';
import { searchFilter } from '../actions';

import { Input } from 'semantic-ui-react'

@connect(undefined, {searchFilter})

export default class Search extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }

  state = {
    searchValue: ''
  }

  handleSearch(e) {
    console.log(this.props);
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
