import React, { Component } from 'react';

import TodoList from './TodoList.jsx';
import AddUser from './AddUser.jsx';
import Footer from './Footer.jsx';
import Search from './Search.jsx'

import {
  Header
  ,Container
  ,Divider
  ,Icon
} from 'semantic-ui-react'

require('./main.less')

export default class UserApp extends Component {

    render() {
        return (
          <Container textAlign='left'>
            <Header as='h5'></Header>
              <Header
                as='h5'
                inverted
                color='white'
              >
                <Icon
                  name='users'
                  circular
                  color='green'
                  inverted
                />
                  MyLo
              </Header>
              <Search />
              <AddUser />
              <Footer />
              <TodoList />
          </Container>
        );
    }
}
