import React, { Component } from 'react';

import styles from './User.less';

export default class User extends Component {
    render() {
        const { text, email, completed, onToggle } = this.props;

        return (
            <div
                className={completed ? styles.completed : styles.root}
                onClick={onToggle}
            >   
                <h6>The name:</h6>
                <h2>{text}</h2>
                <p>The email: {email}</p>
            </div>
        );
    }
}
