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
        this.handleTeamChange = this.handleTeamChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
        this.handleCreateNew = this.handleCreateNew.bind(this);
    }

    state = {
        name: ''
        ,surname: ''
        ,position: ''
        ,team: ''
        ,email: ''
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
    handleTeamChange(e) {
      this.setState({
        team: e.target.value
      })
    }
    handlePositionChange(e) {
      this.setState({
        position: e.target.value
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
          ,this.state.team
          ,this.state.position
          ,this.state.email
        );
        this.setState({
            name: ""
            ,surname: ""
            ,team:""
            ,position:""
            ,email: ""
        });
    }

    render() {
        return (
          <Segment.Group raised>
            <Segment>
              <Input
                placeholder='Name'
                value={this.state.name}
                onChange={this.handleNameChange}
              />
            </Segment>
            <Segment>
              <Input
                placeholder='Surname'
                value={this.state.surname}
                onChange={this.handleSurnameChange}
              />
            </Segment>
            <Segment>
              <Input
                placeholder='Team'
                value={this.state.team}
                onChange={this.handleTeamChange}
              />
            </Segment>
            <Segment>
              <Input
                placeholder='Position'
                value={this.state.position}
                onChange={this.handlePositionChange}
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
