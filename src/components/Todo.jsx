import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import SerchTaskForm from "./SerchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
const Todo = () => {
	const [tasks, setTasks] = useState([
		{ id: "task1", className: "todo__item", label: "task1", isDone: false },
		{ id: "task2", className: "todo__item", label: "task2", isDone: true },
		{ id: "task3", className: "todo__item", label: "task3", isDone: true },
	]);
	//localStorage.setItem(JSON.stringify(tasks))
	const [taskValue, setTaskValue] = useState("");
	const onDeleteAllButtonClick = () => {
		const conf = confirm("Удалить все задачи?");
		if (conf) {
			setTasks([]);
		}
	};
	const deleteTask = (taskId) => {
		setTasks(tasks.filter(task => task.id !== taskId))
	};
	const taskChange = (taskId, isDone) => {
		setTasks(tasks.map(task =>  {
			if(task.id === taskId){
				return {...task,isDone}
			}
			return task
		}))
		console.log(tasks)
		console.log(`задача ${taskId} ${isDone}`);
	};
	const onSerchInput = (query) => {
		console.log(`${query}`);
	};
	const addTask = () => {
		if (taskValue.trim().length > 0) {
			const newtask = {
				id: crypto?.randomUUID() ?? Date.now().toString(),
				className: "todo__item",
				label: taskValue,
				isDone: false,
			};
			setTasks([...tasks, newtask]);
			setTaskValue("");
		}
	};
	return (
		<div className="todo">
			<h1 className="todo__title">To Do List</h1>
			<AddTaskForm
				addTask={addTask}
				value={taskValue}
				setValue={setTaskValue}
			/>
			<SerchTaskForm onSerchInput={onSerchInput} />
			<TodoInfo
				done={tasks.filter((t) => t.isDone == true).length}
				total={tasks.length}
				onDeleteAllButtonClick={onDeleteAllButtonClick}
			/>
			<TodoList
				tasks={tasks}
				onTaskDelete={deleteTask}
				onTaskChange={taskChange}
			/>
		</div>
	);
};

export default Todo;
