import { createContext, useReducer } from "react";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import ComponentA from "./components/context/ComponentA";
import ComponentB from "./components/context/ComponentB";
import ComponentC from "./components/context/ComponentC";
import Counter from "./components/Counter";
import CounterOne from "./components/CounterOne";
import DataFetchingUseReducer from "./components/DataFetchingUseReducer";
import ErrorBoundary from "./components/ErrorBoundary";
import Hero from "./components/Hero";
import HookMouse from "./components/HookMouse";
import Hooks from "./components/Hooks";
import HoverCount from "./components/HoverCount";
import HoverCounterTwo from "./components/HoverCounterTwo";
import MouseContainer from "./components/MouseContainer";
import PortalDemo from "./components/PortalDemo";
import RefsDemo from "./components/RefsDemo";
import ParentComponent from "./components/useCallback/ParentComponent";
import User from "./components/User";
import { UserProvider } from "./components/UserContext";
import ClassTimer from "./components/useRef/ClassTimer";
import HookTimer from "./components/useRef/HookTimer";
import YouTubeForm from "./components/YouTubeForm";

export const CountContext = createContext();
function App() {
  return (
    <div className="App">
      <YouTubeForm />
    </div>
  );
}

export default App;
