import React, { Component } from 'react';

import {
  Card
  , Image
  , Icon
  , Grid
} from 'semantic-ui-react'

export default class User extends Component {
    render() {
        const { name, surname, email, completed, onToggle } = this.props;

        return (
          <Grid
            columns={3}
            divided
          >
            <Grid.Row>
              <Grid.Column>
                <Card.Group>
                  <Card
                    color={completed? 'yellow' : 'black' }
                    onClick={onToggle}
                  >
                    <Card.Content>
                      <Image
                        size='small'
                        floated='left'
                        src='http://semantic-ui.com/images/avatar2/large/matthew.png'
                      />
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
                </Card.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        );
    }
}
