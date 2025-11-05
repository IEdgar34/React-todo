import Filed from "./filed";

const SerchTaskForm = (props) => {
	const { onSerchInput } = props;
	return (
		<form className="todo__form">
			<Filed
				className="todo__filed"
				label="Search task"
				id="search-task"
				type="search"
				onInput={({ target }) => onSerchInput(target.value)}
			/>
		</form>
	);
};
export default SerchTaskForm;
