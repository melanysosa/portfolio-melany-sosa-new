import useStyles from './useStyles';

const Button = ({ title, onClick }) => {
	const styles = useStyles();
	return (
		<div>
			<button onClick={onClick} className={styles.btn}>
				{title}
			</button>
		</div>
	);
};

export default Button;
