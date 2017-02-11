import React, { Component } from 'react';

import TodoList from './TodoList.jsx';
import AddUser from './AddUser.jsx';
import Footer from './Footer.jsx';

import styles from './UserApp.less';

export default class UserApp extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.container}>
                    <h2 className={styles.header}>MyLo</h2>

                    <div className={styles.app}>
                        <AddUser />
                        <Footer />
                        <TodoList />

                    </div>
                </div>
            </div>
        );
    }
}
