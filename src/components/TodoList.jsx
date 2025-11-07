import TodoItem from "./TodoItem";
const TodoList = (props) => {
	const {
		serchedTask,
		tasks = [],
		notComplitedtaskidRef,
		notComplitedtaskid,
		onTaskDelete,
		onTaskChange,
	} = props;
	const hastask = tasks.length === 0;
	const searchTaskLenght = serchedTask?.length === 0;
	if (hastask) {
		return <div className="todo__empty-message">there at not task yet</div>;
	}
	if (!hastask && searchTaskLenght) {
		return <div className="todo__empty-message">task not found</div>;
	}
	return (
		<ul className="todo__list">
			{(serchedTask ?? tasks).map((task) => (
				<TodoItem
					ref={
						task.id === notComplitedtaskid
							? notComplitedtaskidRef
							: null
					}
					key={task.id}
					{...task}
					onTaskDelete={onTaskDelete}
					onTaskChange={onTaskChange}
				/>
			))}
		</ul>
	);
};

export default TodoList;
