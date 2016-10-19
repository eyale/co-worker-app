import React, { Component } from 'react';

import styles from './Todo.less';

export default class Todo extends Component {
    render() {
        const { text, completed, onToggle, onDelete } = this.props;

        return (
            <section>
                <div
                    className={completed ? styles.completed : styles.root}
                    onClick={onToggle}
                >
                    <input 
                        type='checkbox'
                        checked={completed ? true : false}
                    />
                        {text}
                </div>

                <button 
                    className='delete' 
                    onClick={onDelete}
                >
                    delete
                </button>

            </section>
        );
    }
}
