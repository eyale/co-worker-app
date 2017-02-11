import React, { Component } from 'react';

import TodoList from './TodoList.jsx';
import AddUser from './AddUser.jsx';
import Footer from './Footer.jsx';

import {
  Header
  ,Container
  ,Divider
  ,Icon
} from 'semantic-ui-react'

export default class UserApp extends Component {

    render() {
        return (
          <Container textAlign='left'>
            <Header as='h5'></Header>
              <Header
                as='h5'
                color='blue'
              >
                <Icon
                  name='users'
                  circular
                  color='blue'
                  inverted
                />
                  MyLo
              </Header>
              <AddUser />
              <Footer />
              <TodoList />
          </Container>
        );
    }
}
