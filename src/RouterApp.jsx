import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Work from './pages/Work/Work';
import bgVideo from '../src/assets/bg/bg-video3.mp4';

const RouterApp = () => {
	return (
		<div>	
		<video autoPlay loop muted>
			<source src={bgVideo} type='video/mp4' />
		</video>
			<Routes>
			
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/skills' element={<Skills />} />
				<Route path='/work' element={<Work />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
		</div>
	);
};

export default RouterApp;
