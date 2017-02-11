import React, { Component } from 'react';

import {
  Card
  , Image
  , Icon
  , Dimmer
} from 'semantic-ui-react'

export default class User extends Component {
    render() {
        const { name, surname, email, completed, onToggle } = this.props;

        return (
            <Card
              color={completed?'blue':''}
              onClick={onToggle}
            >
              <Image src='http://semantic-ui.com/images/avatar2/large/matthew.png' />
              <Card.Content>
                <Card.Header>
                  {`${surname} ${name}`}
                </Card.Header>
                <Card.Meta>
                    {'Alabama'}
                </Card.Meta>
                <Card.Description>
                  {`${name} is a FrontEnd`}
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a><Icon name='mail' />{email}</a>
              </Card.Content>
            </Card>
        );
    }
}
