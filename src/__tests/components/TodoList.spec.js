import React from 'react';

import { mount } from 'enzyme';

import TodoList from './../../components/TodoList';

it('deve renderizar uma list e button', () => {
    const wrapper = mount(<TodoList />);

    expect(wrapper.find('ul').exists()).toBe(true);
    expect(wrapper.find('input[name="todo"][type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
});

it('should be able to add new todo', () => {
    const wrapper = mount(<TodoList />);

    wrapper.find('input[name="todo"]').simulate('change', { target: { value: 'Nova todo' } });

    wrapper.find('button').simulate('click');

    expect(wrapper.find('ul').contains(<li>Nova todo</li>)).toBe(true);
});