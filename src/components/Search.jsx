import React, { Component } from 'react';

import { Input } from 'semantic-ui-react'

export default class Search extends Component {
  render() {
    return (
        <Input label='Search employee: ' placeholder='any known information' />
    )
  }
}
