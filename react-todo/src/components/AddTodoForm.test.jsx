import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AddTodoForm from '../AddTodoForm';

describe('AddTodoForm', () => {
  it('renders form elements correctly', () => {
    render(<AddTodoForm onAdd={() => {}} />);
    expect(screen.getByTestId('todo-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-button')).toBeInTheDocument();
  });

  it('calls onAdd with input value when form is submitted', () => {
    const mockOnAdd = vi.fn();
    render(<AddTodoForm onAdd={mockOnAdd} />);
    
    const input = screen.getByTestId('todo-input');
    const form = screen.getByTestId('add-todo-form');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.submit(form);
    
    expect(mockOnAdd).toHaveBeenCalledWith('New Todo');
    expect(input.value).toBe('');
  });

  it('does not call onAdd when input is empty', () => {
    const mockOnAdd = vi.fn();
    render(<AddTodoForm onAdd={mockOnAdd} />);
    
    const form = screen.getByTestId('add-todo-form');
    fireEvent.submit(form);
    
    expect(mockOnAdd).not.toHaveBeenCalled();
  });

  it('does not call onAdd when input contains only whitespace', () => {
    const mockOnAdd = vi.fn();
    render(<AddTodoForm onAdd={mockOnAdd} />);
    
    const input = screen.getByTestId('todo-input');
    const form = screen.getByTestId('add-todo-form');
    
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.submit(form);
    
    expect(mockOnAdd).not.toHaveBeenCalled();
  });
});
