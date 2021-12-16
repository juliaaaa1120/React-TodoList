import "./App.css";
import TodoList from "./components/TodoList";
import DoneList from "./components/DoneList";
import UndoneList from "./components/UndoneList";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
          <nav>
            <ul id="nav">
              <li id="nav"><Link to="/">Home</Link></li>
              <li id="nav"><Link to="/done">Done</Link></li>
              <li id="nav"><Link to="/undone">Undone</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/done"><Done /></Route>
            <Route path="/undone"><Undone /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
        </div>
    </Router>
  );
}

function Home() {
  return <TodoList></TodoList>;
}

function Done() {
  return <DoneList></DoneList>;
}

function Undone() {
  return <UndoneList></UndoneList>;
}

export default App;