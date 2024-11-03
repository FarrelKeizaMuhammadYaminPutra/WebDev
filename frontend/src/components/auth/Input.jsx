const Input = ({ icon: Icon, ...props }) => {
	return (
		<div className='relative mb-6'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<Icon className='size-5 text-white' />
			</div>
			<input
				{...props}
				className='w-full pl-10 pr-3 py-2 bg-black bg-opacity-5 rounded-lg border border-gray-600 focus:border-gray-200 focus:ring-2 focus:ring-gray-300 text-white placeholder-grey-400 transition duration-200 '
			/>
		</div>
	);
};
export default Input;
