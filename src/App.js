import React from "react";
import './style/index.scss';
import { StateProvider } from "./context";
import { initialState, reducer } from "./context/reducer";
import Routes from "./routes/main";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Routes />
    </StateProvider>
  );
}

export default App;
