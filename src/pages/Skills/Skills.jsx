import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import Javascript from '../../assets/javascript.png';
import ReactJS from '../../assets/react.png';
import Redux from '../../assets/redux.png';
import Git from '../../assets/git.png';
import Github from '../../assets/github.png';
import Sass from '../../assets/sass.png';
import Bootstrap from '../../assets/bootstrap.png';
import Tailwind from '../../assets/tailwind.png';
import useStyles from './useStyles';
import { motion } from 'framer-motion';
import {
	movementX1,
	movementX2,
	opacityPages,
} from '../../components/Animations/animations';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer/Footer';
import { Certification } from './Certification';
import htmlCss from '../../assets/html-Css-OB.jpg';
import JS from '../../assets/javaScript-OB.jpg';

const Skills = () => {
	const styles = useStyles();
	const [t] = useTranslation('language');
	return (
		<motion.div
			name='skilss'
			className={styles.skillsContainer1}
			key='skills'
			initial='hidden'
			animate='visible'
			variants={opacityPages}
		>
			{/**Container */}
			<div className={styles.skillsContainer2}>
				<motion.div variants={movementX1}>
					<p className={styles.titleSkills}>
						{t('skillsPage.titleSkills')}
					</p>
					<p className={styles.p2}>{t('skillsPage.subtitleSkills')}</p>
				</motion.div>

				<motion.div
					variants={movementX2}
					className={styles.divContainerSkills}
				>
					<div className={styles.skillsDiv}>
						<img
							className={styles.skillsImg}
							src={HTML}
							alt='HTML logo'
						/>
						<p className={styles.skillsP}>HTML</p>
					</div>
					<div className={styles.skillsDiv}>
						<img className={styles.skillsImg} src={CSS} alt='Css logo' />
						<p className='my-4'>CSS</p>
					</div>
					<div className={styles.skillsDiv}>
						<img
							className={styles.skillsImg}
							src={Javascript}
							alt='javascript Logo'
						/>
						<p className={styles.skillsP}>Javascript</p>
					</div>
					<div className={styles.skillsDiv}>
						<img
							className={styles.skillsImg}
							src={ReactJS}
							alt='Reactjs Logo'
						/>
						<p className={styles.skillsP}>ReactJS</p>
					</div>
					<div className={styles.skillsDiv}>
						<img
							className={styles.skillsImg}
							src={Redux}
							alt='Redux Logo'
						/>
						<p className={styles.skillsP}>Redux</p>
					</div>
					<div className={styles.skillsDiv}>
						<img className={styles.skillsImg} src={Git} alt='Git Logo' />
						<p className={styles.skillsP}>Git</p>
					</div>
					<div className={styles.skillsDiv}>
						<img
							className={styles.skillsImg}
							src={Github}
							alt='Github Logo'
						/>
						<p className={styles.skillsP}>Github</p>
					</div>
					<div className={styles.skillsDiv}>
						<img
							className={styles.skillsImg}
							src={Sass}
							alt='Sass Logo'
						/>
						<p className={styles.skillsP}>Sass</p>
					</div>
					<div className={styles.skillsDiv}>
						<img
							className={styles.skillsImg}
							src={Bootstrap}
							alt='Sass Logo'
						/>
						<p className={styles.skillsP}>Bootstrap</p>
					</div>
					<div className={styles.skillsDiv}>
						<img
							className={styles.skillsImg}
							src={Tailwind}
							alt='Sass Logo'
						/>
						<p className={styles.skillsP}>Tailwind</p>
					</div>
				</motion.div>
			</div>
			<motion.div variants={movementX1}>
				<p className={styles.titleSkills}>
					{t('skillsPage.certificationTitle')}
				</p>
				<Certification title={'Html/Css'} img={htmlCss} alt={'HTML/CSS}'} />
				<Certification title={'JavaScript'} img={JS} alt={'JS'} />
			</motion.div>
			<Footer />
		</motion.div>
	);
};

export default Skills;
