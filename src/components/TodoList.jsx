import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  toggleUser,
  setFilter
} from '../actions';

import User from './User.jsx';

@connect(mapStateToProps, { toggleUser })
export default class TodoList extends Component {
    render() {
        return (
            <div className="base">
                {
                    this.props.users.map(user =>
                        <User
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            surname={user.surname}
                            team={user.team}
                            position={user.position}
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

function getVisibleTodos(users, filterUsers) {
    switch (filterUsers) {
        case 'SHOW_ALL':
          return users;

        case 'SHOW_COMPLETED':
          return users.filter(user => user.completed);

        case 'SHOW_NEW':
          return users.filter(user => !user.completed);

        case 'SEARCH_USER':
          return users.filter(user => user.name.includes(state.setFilter))
    }
}

function mapStateToProps(state) {
    return {
        users: getVisibleTodos(state.users, state.filterUsers)
    };
}
