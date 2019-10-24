import React, { Component } from 'react'

export default class TodoList extends Component {

    state = {
        newTodo: '',
        todos: [],
    }

    handleInputChange = e => {
        this.setState({ newTodo: e.target.value })
    }

    handleAddTodo = () => {
        this.setState({ todos: [...this.state.todos, this.state.newTodo], newTodo: '' });
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.todos.map((todo, index) => <li key={index}>{todo}</li>)
                    }
                </ul>
                <input
                    name="todo"
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.newTodo}
                />
                <button onClick={this.handleAddTodo}>Adicionar Todo</button>
            </div>
        )
    }
}
