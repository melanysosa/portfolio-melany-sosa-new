import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import ResumeEs from '../../assets/Melany-Sosa(es).pdf';
import ResumeEN from '../../assets/Melany-Sosa(en).pdf';
import useStyles from './useStyles';
import Button from '../../components/Button/Button';
import { motion } from 'framer-motion';
import {
	opacityPages,
	movementX1,
	movementX2,
	movementY,
	movement,
} from '../../components/Animations/animations';
import { useTranslation } from 'react-i18next';
import ButtonTranslate from '../../components/ButtonTranslate/ButtonTranslate';
import Footer from '../../components/Footer/Footer';
import Modal from '../../components/Modal/Modal';

const Home = () => {
	const [t] = useTranslation('language');

	const styles = useStyles();
	const navigate = useNavigate();
	const toWork = () => navigate('/work');
	const toContact = () => navigate('/contact');
	const toAboutMe = () => navigate('/about');

	const [modalOn, setModalOn] = useState(false);

	const clicked = () => {
		setModalOn(true);
	};

	return (
		<motion.div
			name='home'
			className={styles.home}
			key='home'
			initial='hidden'
			animate='visible'
			variants={opacityPages}
		>
			<ButtonTranslate />

			{/**Container */}
			<div className={styles.containerHome}>
				<div className={styles.boxOpacity}>
					<motion.p variants={movementX1} className={styles.p1}>
						{t('homePage.text1')}
					</motion.p>
					<motion.h1 variants={movementX2} className={styles.name}>
						{t('homePage.text2')}
					</motion.h1>
					<motion.h2 variants={movementX1} className={styles.job}>
						{t('homePage.text3')}
					</motion.h2>
				</div>

				<motion.div
					variants={movementX2}
					className={styles.containerSocialIcons}
				>
					<motion.div variants={movement}>
						<div className={styles.socialIcons}>
							<a
								className={styles.aLinkedin}
								href='https://www.linkedin.com/in/melanynoeliasosa/'
								target='_blank'
								rel='noopener noreferrer'
								title={t('homePage.iconLinkedin')}
							>
								<FaLinkedin size={30} />
							</a>
						</div>
					</motion.div>
					<motion.div variants={movement}>
						<div className={styles.socialIcons}>
							<a
								className={styles.aGitHub}
								href='https://github.com/melanysosa'
								target='_blank'
								rel='noopener noreferrer'
								title={t('homePage.iconGitHub')}
							>
								<FaGithub size={30} />
							</a>
						</div>
					</motion.div>
					<motion.div variants={movement}>
						<div className={styles.socialIcons}>
							<div
								variants={movement}
								className={styles.aMail}
								onClick={toContact}
								title={t('homePage.iconEmail')}
							>
								<HiOutlineMail size={30} />
							</div>
						</div>
					</motion.div>
					<motion.div variants={movement}>
						<div className={styles.socialIcons}>
							<div
								className={styles.aResume}
								title={t('homePage.iconPerson')}
								onClick={clicked}
							>
								<BsFillPersonLinesFill size={30} />
							</div>
						</div>
					</motion.div>
					{modalOn && (
						<Modal
							setModalOn={setModalOn}
							titleModal={t('homePage.titleModal')}
							document1={t('homePage.cvSpanish')}
							href={ResumeEs}
							document2={t('homePage.cvEnglish')}
							href2={ResumeEN}
							button={t('homePage.btnModal')}
						/>
					)}
				</motion.div>

				<motion.div className='flex' variants={movementY}>
					<Button
						title={t('homePage.titleButtonHome2')}
						onClick={toAboutMe}
						className={styles.btnHome}
					/>
					<Button
						title={t('homePage.titleButtonHome')}
						onClick={toWork}
						className={styles.btnHome}
					/>
				</motion.div>
			</div>
			<Footer />
		</motion.div>
	);
};

export default Home;
