import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import TodoList from '../TodoList';

describe('TodoList', () => {
  it('renders initial todos', () => {
    render(<TodoList />);
    const todoItems = screen.getAllByTestId('todo-item');
    expect(todoItems).toHaveLength(3);
    expect(screen.getByText('Learn React Testing')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByTestId('todo-input');
    const addButton = screen.getByTestId('add-button');

    fireEvent.change(input, { target: { value: 'New Todo Item' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
    expect(input.value).toBe(''); // Input should be cleared
  });

  it('toggles todo completion status', () => {
    render(<TodoList />);
    const firstTodo = screen.getAllByTestId('todo-item')[0];
    
    fireEvent.click(firstTodo);
    expect(firstTodo).toHaveStyle({ textDecoration: 'line-through' });
    
    fireEvent.click(firstTodo);
    expect(firstTodo).toHaveStyle({ textDecoration: 'none' });
  });

  it('deletes a todo', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByTestId('delete-button');
    const initialTodoCount = screen.getAllByTestId('todo-item').length;

    fireEvent.click(deleteButtons[0]);
    
    const updatedTodoCount = screen.getAllByTestId('todo-item').length;
    expect(updatedTodoCount).toBe(initialTodoCount - 1);
  });
});
