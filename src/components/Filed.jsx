const Filed = (props) => {
	const {
		className = "",
		label,
		id,
		type = "text",
		value ,
		onInput = () => {},

	} = props;

	return (
		<div className={`field ${className}`}>
			<label className="field__label" htmlFor="new-task">
				{label}
			</label>
			<input
				className="field__input"
				id={id}
				placeholder=" "
				autoComplete="off"
				type={type}
				value={value}
				onInput={onInput}
			/>
		</div>
	);
};
export default Filed;
