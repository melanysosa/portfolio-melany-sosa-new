import { motion } from 'framer-motion';
import {
	opacityPages,
	movementX1,
	movementX2,
	movementY,
} from '../../components/Animations/animations';
import useStyles from './useStyles';

const Modal = ({
	titleModal,
	document1,
	document2,
	href2,
	href,
	button,
	setModalOn,
}) => {
	const styles = useStyles();
	const handleCancelClick = () => {
		setModalOn(false);
	};
	return (
		<motion.div
			name='contact'
			key='contact'
			initial='hidden'
			animate='visible'
			variants={opacityPages}
			className={styles.bodyModal}
		>
			<div className={styles.containerModal}>
				<div className={styles.modal}>
					<div className={styles.titleModal}>{titleModal}</div>
					<div>
						<motion.div variants={movementX1}>
							<a
								className={styles.document}
								href={href}
								target='_blank'
								rel='noopener noreferrer'
							>
								{document1}
							</a>
						</motion.div>
						<motion.div variants={movementX2}>
							<a
								className={styles.document}
								href={href2}
								target='_blank'
								rel='noopener noreferrer'
							>
								{document2}
							</a>
						</motion.div>
					</div>

					<motion.div variants={movementY} className={styles.containerBtn}>
						<button
							onClick={handleCancelClick}
							className={styles.btnModal}
						>
							{button}
						</button>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
};

export default Modal;
