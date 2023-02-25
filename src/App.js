import "./App.css";
import react from "react";
import { createContext } from "react";
import AppChild from "./componets/AppChild";

export const ContextApi = createContext();

function App() {
  const data = "green";
  return (
    <div>
      <ContextApi.Provider value={{ appColor: data }}>
        <AppChild></AppChild>
      </ContextApi.Provider>
    </div>
  );
}

export default App;
