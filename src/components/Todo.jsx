import { useState, useEffect, useRef } from "react";
import AddTaskForm from "./AddTaskForm";
import SerchTaskForm from "./SerchTaskForm";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
import Button from "./Button";
const Todo = () => {
	const [tasks, setTasks] = useState(() => {
		const localTasks = localStorage.getItem("tasks");
		if (localTasks) {
			return JSON.parse(localTasks);
		}
		return [
			{
				id: "task1",
				className: "todo__item",
				label: "task1",
				isDone: false,
			},
			{
				id: "task2",
				className: "todo__item",
				label: "task2",
				isDone: true,
			},
			{
				id: "task3",
				className: "todo__item",
				label: "task3",
				isDone: true,
			},
		];
	});
	const [taskValue, setTaskValue] = useState("");
	const [serchValue, setSerchValue] = useState("");
	const notComplitedtaskidRef = useRef(null);
	const notComplitedtaskid = tasks.find((task) =>
		!task.isDone ? task : null
	)?.id;
	const scrollTotask = () => {
		notComplitedtaskidRef.current.scrollIntoView();
	};
	const onDeleteAllButtonClick = () => {
		const conf = confirm("Удалить все задачи?");
		if (conf) {
			setTasks([]);
		}
	};
	const deleteTask = (taskId) => {
		setTasks(tasks.filter((task) => task.id !== taskId));
	};
	
	const taskChange = (taskId, isDone) => {
		setTasks(
			tasks.map((task) => {
				if (task.id === taskId) {
					return { ...task, isDone };
				}
				return task;
			})
		);
		console.log(`задача ${taskId} ${isDone}`);
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
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	const serchIsTrue = serchValue.trim().toLowerCase();
	const serchedTask = serchIsTrue
		? tasks.filter((task) => task.label.toLowerCase().includes(serchIsTrue))
		: null;

	return (
		<div className="todo">
			<h1 className="todo__title">To Do List</h1>
			<AddTaskForm
				addTask={addTask}
				value={taskValue}
				setValue={setTaskValue}
			/>
			<SerchTaskForm
				serchValue={serchValue}
				setSerchValue={setSerchValue}
			/>
			<TodoInfo
				done={tasks.filter((t) => t.isDone == true).length}
				total={tasks.length}
				onDeleteAllButtonClick={onDeleteAllButtonClick}
			/>
			{tasks.length > 0 && (
				<Button onClick={scrollTotask} className="button">
					scroll to a not complite task{" "}
				</Button>
			)}
			<TodoList
				serchedTask={serchedTask}
				tasks={tasks}
				notComplitedtaskidRef={notComplitedtaskidRef}
				notComplitedtaskid={notComplitedtaskid}
				onTaskDelete={deleteTask}
				onTaskChange={taskChange}
			/>
		</div>
	);
};

export default Todo;
