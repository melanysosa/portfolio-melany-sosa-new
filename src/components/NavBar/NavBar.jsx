import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/MS-Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import useStyles from './useStyles';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
	const styles = useStyles();
	const navigate = useNavigate();
	const toHome = () => navigate('/');

	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	const [t] = useTranslation('language');

	return (
		<div className={styles.containerNav}>
			<img onClick={toHome} src={Logo} alt='Logo img' className='w-[50px]' />
			<div className='flex items-center'>
				<ul className={styles.nav}>
					<Link to='/'>
						<li className={styles.navLi}>{t('navBarPage.itemHome')}</li>
					</Link>
					<Link to='/about'>
						<li className={styles.navLi}>{t('navBarPage.itemAbout')}</li>
					</Link>
					<Link to='/skills'>
						<li className={styles.navLi}>{t('navBarPage.itemSkills')}</li>
					</Link>
					<Link to='/work'>
						<li className={styles.navLi}>
							{t('navBarPage.itemProjects')}
						</li>
					</Link>
					<Link to='/contact'>
						<li className={styles.navLi}>
							{t('navBarPage.itemContact')}
						</li>
					</Link>
				</ul>
			</div>
			{/** Hamburguer */}
			{!nav ? (
				<div onClick={handleClick} className={styles.faBars}>
					<FaBars />
				</div>
			) : (
				<div className='nav-mobile' onClick={handleClick}>
					<ul className={styles.navMobile}>
						<div className={styles.faTimes}>
							<FaTimes />
						</div>

						<li className={styles.liMobile}>
							<Link to='/'>{t('navBarPage.itemHome')}</Link>
						</li>
						<li className={styles.liMobile}>
							<Link to='/about'>{t('navBarPage.itemAbout')}</Link>
						</li>
						<li className={styles.liMobile}>
							<Link to='/skills'>{t('navBarPage.itemSkills')}</Link>
						</li>
						<li className={styles.liMobile}>
							<Link to='/work'>{t('navBarPage.itemProjects')}</Link>
						</li>
						<li className={styles.liMobile}>
							<Link to='/contact'>{t('navBarPage.itemContact')}</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default NavBar;
