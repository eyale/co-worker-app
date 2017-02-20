import React, { Component } from 'react';
import {connect} from 'react-redux';

import { Input } from 'semantic-ui-react';
import { setFilter } from '../actions';

// @connect(mapStateToProps, mapDispatchToProps)

class Search extends Component {

  handleSearch(e) {

    this.props.onEnterValue(e.target.value);
  }

  render() {

    return (
        <Input
          label='Search employee: '
          placeholder='by name'
          onChange={this.handleSearch.bind(this)}
        />
    )
  }
}

const mapStateToProps = (state) => ({
  state: state
})

const mapDispatchToProps = (dispatch) => (
   {
     onEnterValue: (value) => {
       dispatch(setFilter(value))
     }
  }
)


export default connect(mapStateToProps,mapDispatchToProps)(Search)
