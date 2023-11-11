import React, { useState } from "react";
import Task from "./task";

//create your first component
const Home = () => {
	const [newTodo, setNewTodo] = useState("");
	const [todos, setTodos] = useState([]);

	function addTodo(e) {
		if (e.key === "Enter") {
			setTodos([...todos, newTodo]);
			setNewTodo("");
		}
	}

	function deleteTodo(i) {
		setTodos(todos.filter((todo, index) => index !== i));
	}


	return (
		<div className="d-flex flex-column justify-content-center align-items-center min-vh-100" style={{backgroundColor: "#f5f5f5", paddingTop: "12vh"}} >
			<h1 className="colorPurple display-1 fw-light mb-4" style={{marginTop: "-24vh"}} >todos</h1>
			
			<div className="d-flex flex-column w-100 shadow" style={{maxWidth: "400px"}}>
				<input
					type="text"
					className="text-muted fw-light fs-4 py-2 px-4 d-block w-100"
					style={{"--bs-text-opacity": 0.25}}
					placeholder="Enter your todo"
					autoComplete="off"
					value={newTodo}
					onChange={e => setNewTodo(e.target.value)}
					onKeyDown={addTodo}
				/>

				<ul className="bg-white m-0 list-unstyled">
					{todos.map((todo, index) => {
						return (
							<Task key={index} id={index} task={todo} deleteHandler={deleteTodo}></Task>
						)
					})}
				</ul>

				<p className="text-black-50 fw-light fs-6 m-0 px-3 py-2 d-block w-100">
					{
						todos.length > 1 ? `${todos.length} items left` 
						: todos.length === 1 ? "1 item left" 
						: "No tasks, add a task"
					}
				</p>
			</div>
		</div>
	);
};

export default Home;
