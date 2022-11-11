const useStyles = () => {
	return {
		bodyModal: 'bg-black/70 fixed inset-0 z-50 text-white',
		containerModal: 'flex h-screen justify-center items-center ',
		modal: 'flex-col justify-center  bg-transparent p-4 border-2 border-white rounded-xl ',
		titleModal: 'flex justify-center text-xl font-semibold mb-10',
		document:
			'flex m-4 border border-white rounded-full  bg-violet-400 px-20 py-3 hover:scale-125  hover:bg-pink-600',
		containerBtn: 'flex justify-center',
		btnModal:
			'flex m-4 border border-white rounded-full  px-9 py-3 bg-indigo-600 hover:bg-violet-900',
	};
};

export default useStyles;
