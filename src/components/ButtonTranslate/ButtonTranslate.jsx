import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import useStyles from './useStyles';

const ButtonTranslate = () => {
	const { i18n } = useTranslation();
	const styles = useStyles();
	const [lang, setLang] = useState(false);
	const handleChange = () => setLang(!lang);
	const changeLanguage = () => {
		lang ? i18n.changeLanguage('es') : i18n.changeLanguage('en');
	};
	return (
		<div className={styles.containerBtnTranslate}>
			<label id='btn-translate' className='switch'>
				<input
					onChange={handleChange}
					onClick={changeLanguage}
					type='checkbox'
				/>
				<span className='slider'></span>
			</label>
		</div>
	);
};

export default ButtonTranslate;
