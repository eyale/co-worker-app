import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleUser } from '../actions';

import User from './User.jsx';

@connect(mapStateToProps, { toggleUser })
export default class TodoList extends Component {
    // what happens here ???
    render() {
        return (
            <div className="base">
                {
                    this.props.users.map(user =>
                        <User
                            key={user.id}
                            id={user.id}
                            text={user.text}
                            email={user.email}
                            completed={user.completed}
                            onToggle={() => this.props.toggleUser(user.id)}
                        />
                    )
                }
            </div>
        );
    }
}

function getVisibleTodos(users, filter) {
    switch (filter) {
        case 'SHOW_ALL':
          return users;

        case 'SHOW_COMPLETED':
          return users.filter(user => user.completed);

        case 'SHOW_NEW':
          return users.filter(user => !user.completed);
    }
}

function mapStateToProps(state) {
    return {
        users: getVisibleTodos(state.users, state.filter)
    };
}
