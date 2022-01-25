import React from "react";

import { Todo } from "./components/Todo";

function App() {
  return (
    <>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Explore React" />
    </>
  );
}

export default App;
