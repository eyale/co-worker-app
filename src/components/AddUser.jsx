import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addUser } from '../actions';

import styles from './AddUser.less';

@connect(undefined, { addUser })

export default class AddTodo extends Component {
    constructor() {
        super();

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCreateNew = this.handleCreateNew.bind(this);
    }

    state = {
        text: "",
        email:""
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleCreateNew(e) {
        this.props.addUser(this.state.text, this.state.email);
        this.setState({ 
            text: "",
            email: ""
        });
    }

    render() {
        return (
            <div className={styles.root}>
                <input
                    className={styles.input_name}
                    type="text"
                    placeholder="Name"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <input
                    className={styles.input_email}
                    type="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <button
                    className={styles.button}
                    onClick={this.handleCreateNew}
                >
                    Create new
                </button>
            </div>
        );
    }
}
