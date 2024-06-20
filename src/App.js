import React from 'react';
import TodoContext from './context/TodoContext';
import Todo from './components/Todo';

function App() {
  return (
    <>
      <TodoContext>
        <Todo/>
      </TodoContext>
    </>
  );
}

export default App;
