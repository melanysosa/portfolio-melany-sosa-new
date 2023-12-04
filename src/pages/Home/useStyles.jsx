const useStyles = () => {
	return {
		home: 'w-full h-screen  max-w-[1000px] mx-auto px-8 flex flex-col justify-center ',
		containerHome: 'mt-[20px]',
		p1: 'text-3xl sm:text-5xl text-violet-200 mt-[40px] mb-0.5',
		name: 'text-4xl sm:text-6xl font-bold text-white mb-0.5',
		job: 'text-4xl sm:text-5xl font-bold text-indigo-400 mb-8',
		containerSocialIcons: 'flex flex-wrap  mb-8',
		socialIcons:
			'w-[50px] h-[60px] flex m-1  ring-white ring-1 rounded-md hover:scale-125 hover:bg-indigo-400 bg-black/40',
		aLinkedin: 'flex justify-center items-center w-full text-white',
		aGitHub: 'flex justify-center items-center w-full text-white ',
		aMail: 'flex justify-center items-center w-full text-white  ',
		aBehance: 'flex justify-center items-center w-full text-white  ',

		aResume: 'flex justify-center items-center w-full text-white ',
		iconButton: 'ml-2',
		boxOpacity: 'ring-white ring-1 my-3 p-5 rounded-md bg-black/50',
	};
};

export default useStyles;
