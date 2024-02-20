import useStyles from './useStyles';
import { motion } from 'framer-motion';
import {
	opacityPages,
	movementX2,
	movementX1,
} from '../../components/Animations/animations';
import ProjectUIUX from '../../assets/ProjectUIUX.png';
import ProjectUIUX2 from '../../assets/DailyUI.png';
import Project1 from '../../assets/project1.png';
import Project2 from '../../assets/project2.png';
import Project3 from '../../assets/project3.png';
import Project4 from '../../assets/project4.png';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer/Footer';
import WorkBox from './WorkBox';


const Work = () => {
	const [t] = useTranslation('language');
	const styles = useStyles();
	return (
		<motion.div
			name='work'
			className={styles.containerWork}
			key='work'
			initial='hidden'
			animate='visible'
			variants={opacityPages}
		>
			<div className={styles.divContainer}>
				<motion.div variants={movementX1} className={styles.divP}>
					<p className={styles.title}>
						{t('projectsPages.titleProjects')}
					</p>
					<p className={styles.pWork}>
						{' '}
						{t('projectsPages.subtitleProjects')}
					</p>
				</motion.div>

				{/**Container */}

				<motion.div className={styles.divContainer2} variants={movementX2}>
					{/**Grid Item */}
					<WorkBox
						pic={ProjectUIUX2}
						title='Daily UI'
						showDemoButton={true}
						demo='https://www.behance.net/gallery/190424817/Daily-UI'
						text={t('projectsPages.containerProjectUIUX2')}
					/>
					<WorkBox
						pic={ProjectUIUX}
						title='Flick Flow'
						showDemoButton={true}
						demo='https://www.behance.net/gallery/183617661/FlickFlow'
						text={t('projectsPages.containerProjectUIUX')}
					/>

					<WorkBox
						pic={Project1}
						title='Popular Movies'
						showDemoButton={true}
						showCodeButton={true}
						demo='https://popular-movies-m.netlify.app/'
						code='https://github.com/melanysosa/popular-movies-app'
						text={t('projectsPages.containerProject1')}
					/>

					<WorkBox
						pic={Project2}
						title='Weather App'
						showDemoButton={true}
						showCodeButton={true}
						demo='https://weather-appms.netlify.app/'
						code='https://github.com/melanysosa/weather-app'
						text={t('projectsPages.containerProject2')}
					/>

					<WorkBox
						pic={Project3}
						title='CRUD'
						showDemoButton={true}
						showCodeButton={true}
						demo='https://crud-m.netlify.app/'
						code='https://github.com/melanysosa/crud-redux-app'
						text={t('projectsPages.containerProject3')}
					/>
					<WorkBox
						pic={Project4}
						title='Todo List'
						showDemoButton={true}
						showCodeButton={true}
						demo='https://todo-list-mns.netlify.app/'
						code='https://github.com/melanysosa/todo-list'
						text={t('projectsPages.containerProject4')}
					/>
				</motion.div>
			</div>
			<Footer />
		</motion.div>
	);
};

export default Work;
