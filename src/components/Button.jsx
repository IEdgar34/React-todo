const Button = (props) => {
	const { onClick,children ,type = "button", className = "" } = props;
	return (
		<button className={className} type={type} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
