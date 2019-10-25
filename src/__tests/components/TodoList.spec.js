import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

import TodoList from './../../components/TodoList';
import { Creators as TodoActions } from './../../store/ducks/todos';

const mockStore = createStore();

const INITIAL_STATE = {
    todos: { data: ['Task 1', 'Task 2'] }
}

const store = mockStore(INITIAL_STATE);

describe('TodoList component', () => {
    
    it('should render a list initial state li todos', () => {
        const wrapper = mount(
            <Provider store={store}><TodoList /></Provider>
        );
    
        expect(wrapper.find('li').length).toBe(2);
    });
    
    it('should render a list, input and button', () => {
        const wrapper = mount(
            <Provider store={store}>
                <TodoList />
                </Provider>
        );
    
        expect(wrapper.find('ul').exists()).toBe(true);
        expect(wrapper.find('input[name="todo"][type="text"]').exists()).toBe(true);
        expect(wrapper.find('button').exists()).toBe(true);
    });
    
    it('should be able to add new todo', () => {
        const wrapper = mount(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );
    
        // console.log(wrapper.html());
    
        wrapper.find('TodoList').setState({ newTodo: 'Task 3' });    
        // wrapper.find('button').simulate('click');        
        wrapper.find('form').simulate('submit');
        expect(store.getActions()).toContainEqual(TodoActions.addTodo('Task 3'));
    });
    
    // it('should be able to add new todo', () => {
    //     const wrapper = mount(<TodoList />);
    
    //     wrapper.find('input[name="todo"]').simulate('change', { target: { value: 'Nova todo' } });
    
    //     wrapper.find('button').simulate('click');
    
    //     expect(wrapper.find('ul').contains(<li>Nova todo</li>)).toBe(true);
    // });
    
    // it('should add new todos to local storage', () => {
    //     const setItemMock = jest.fn();
    
    //     global.localStorage.__proto__.getItem = jest.fn().mockReturnValue("[]");
    //     global.localStorage.__proto__.setItem = setItemMock;
    
    //     const wrapper = mount(<TodoList />);
    
    //     wrapper.setState({ newTodo: 'Nova todo' });
    //     wrapper.instance().handleAddTodo();
    
    //     expect(localStorage.setItem).toHaveBeenLastCalledWith('todos', JSON.stringify(['Nova todo']));
    
    //     // expect(wrapper.find('ul').contains(<li>Nova todo</li>)).toBe(true);
    // })
    
    // it('should load todos from local storage in componentDidMount', () => {
    //     const getItemMock = jest.fn().mockReturnValue(JSON.stringify(['Fazer café']));
    
    //     global.localStorage.__proto__.getItem = getItemMock;
    
    //     const wrapper = mount(<TodoList />);
    
    //     expect(wrapper.state('todos')).toEqual(['Fazer café']);
    // })

});
