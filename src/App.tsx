import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot } from "recoil";
import NewList from "./components/NewList";
import InprogressList from "./components/InprogressList";
import CompletedList from "./components/CompletedList";
import InputTodo from "./components/InputTodo";

function App() {
    return (
        <RecoilRoot>
            <div className="app">
				<header>
					<h1>To-do list</h1>
				</header>
				<InputTodo/>
                <div className="todo-app">
                    <NewList />
                    <InprogressList />
                    <CompletedList />
                </div>
            </div>
        </RecoilRoot>
    );
}

export default App;
