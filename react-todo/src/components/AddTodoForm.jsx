import { useState } from 'react';
import PropTypes from 'prop-types';

const AddTodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="add-todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        data-testid="todo-input"
      />
      <button type="submit" data-testid="add-button">Add Todo</button>
    </form>
  );
};

AddTodoForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddTodoForm;
