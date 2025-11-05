import Button from "./Button";
import Filed from "./filed";
const AddTaskForm = (props) => {
	const { addTask, value, setValue } = props;
	const onAddTask = (event) => {
		event.preventDefault();
		addTask();
	};
	return (
		<form className="todo__form" onSubmit={onAddTask}>
			<Filed
				className="todo__filed"
				label="New task title"
				id="new-task"
				value={value}
				onInput={(event) => setValue(event.target.value)}
			/>
			<Button type="submit" className="button">
				Add
			</Button>
		</form>
	);
};
export default AddTaskForm;
