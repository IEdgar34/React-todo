const TodoInfo = (props) => {
	const { total, done ,onDeleteAllButtonClick} = props;
	const hastask = total > 0;
	return (
		<div className="todo__info">
			<div className="todo__total-tasks">
				Done:{done}  from:{total}
			</div>
			{hastask && (	
				<button
				onClick={onDeleteAllButtonClick}
					className="todo__delete-all-button"
					type="button"
				>
					Delete all
				</button>
			)}
		</div>
	);
};

export default TodoInfo;
