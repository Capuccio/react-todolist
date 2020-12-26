import React from "react";

import "./App.scss";
import InputText from "./components/InputText";
import ListContainer from "./components/ListContainer";

const App = () => {
  return (
    <div className="app">
      <div className="app__container">
        <p className="app__container__title">To-Do List</p>
        <InputText />
        <ListContainer />
      </div>
    </div>
  );
};

export default App;
