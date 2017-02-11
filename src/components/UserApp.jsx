import React, { Component } from 'react';

import TodoList from './TodoList.jsx';
import AddUser from './AddUser.jsx';
import Footer from './Footer.jsx';

import {
  Header
  ,Container
  ,Divider
  ,Icon
  ,Image
} from 'semantic-ui-react'

export default class UserApp extends Component {
    render() {
        return (
          <Container textAlign='left'>
              <Header
                as='h1'
                color='blue'
              >
                <Icon name='users' circular />
                  MyLo
              </Header>
              <AddUser />
              <Footer />
              <TodoList />
          </Container>
        );
    }
}
