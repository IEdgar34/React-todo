import Filed from "./filed";

const SerchTaskForm = (props) => {
	const { serchValue, setSerchValue } = props;
	return (
		<form className="todo__form">
			<Filed
				className="todo__filed"
				label="Search task"
				id="search-task"
				type="search"
				value={serchValue}
				onInput={({ target }) => setSerchValue(target.value)}
			/>
		</form>
	);
};
export default SerchTaskForm;
