import React, { Component } from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as TodoActions } from './../store/ducks/todos';

class TodoList extends Component {

    state = {
        newTodo: '',
    }

    handleInputChange = e => {
        this.setState({ newTodo: e.target.value })
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state.newTodo);

        this.setState({ newTodo: '' });
    }

    handleSubmit = (e) => {

        e.preventDefault();

        // console.log(e.target.todo.value);

        this.handleAddTodo();
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.todos.map((todo, index) => <li key={index}>{todo}</li>)
                    }
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input
                        autoFocus
                        name="todo"
                        type="text"
                        onChange={this.handleInputChange}
                        value={this.state.newTodo}
                    />
                    <button type="submit">Adicionar Todo</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  todos: state.todos.data
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);