const Button = (props) => {
	const { children ,type = "button", className = "" } = props;
	return (
		<button className={className} type={type}>
			{children}
		</button>
	);
};

export default Button;
