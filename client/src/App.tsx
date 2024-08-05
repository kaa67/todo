import { useUnit } from "effector-react";
import React, { useEffect } from "react";
import { $error, $todos, fetchTodosFx } from "./strore/todos";

const App = () => {
  const todos = useUnit($todos);
  const error = useUnit($error);

  useEffect(() => {
    fetchTodosFx();
  }, []);

  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      {error && <h1>{error}</h1>}
    </>
  );
};

export default App;
