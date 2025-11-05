import TodoItem from "./TodoItem";
const TodoList = (props) => {
	const hastask = true;
	const { tasks = [], onTaskDelete ,onTaskChange} = props;
	if (!hastask) {
		return <div className="todo__empty-message"></div>;
	}
	return (
		<ul className="todo__list">
			{tasks.map((task) => (
				<TodoItem key={task.id} {...task} onTaskDelete={onTaskDelete} onTaskChange={onTaskChange} />
			))}
		</ul>
	);
};

export default TodoList;
