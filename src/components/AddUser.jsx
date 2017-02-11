import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../actions';

import {
  Button
  ,Segment
  ,Input
} from 'semantic-ui-react';

@connect(undefined, { addUser })

export default class AddTodo extends Component {
    constructor() {
        super();
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCreateNew = this.handleCreateNew.bind(this);
    }

    state = {
        name: "",
        surname: "",
        email: ""
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }
    handleSurnameChange(e) {
        this.setState({
            surname: e.target.value
        });
    }
    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }
    handleCreateNew(e) {
        this.props.addUser(
          this.state.name
          ,this.state.surname
          ,this.state.email
        );
        this.setState({
            name: "",
            surname: "",
            email: ""
        });
    }

    render() {
        return (
          <Segment.Group raised>
            <Segment>
              <Input
                placeholder='Name'
                value={this.state.text}
                onChange={this.handleTextChange}
              />
            </Segment>
            <Segment>
              <Input
                placeholder='Surname'
                value={this.state.text}
                onChange={this.handleSurnameChange}
              />
            </Segment>
            <Segment>
              <Input
                placeholder="foobar@email.com"
                value={this.state.email}
                onChange={this.handleEmailChange}
              />
            </Segment>
            <Segment>
              <Button
                positive
                onClick={this.handleCreateNew}
              >
                Create new
              </Button>
            </Segment>
         </Segment.Group>
        );
    }
}
