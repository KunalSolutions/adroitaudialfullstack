import { Link } from 'react-router-dom';

const MenuItem = ({ url, label, icon: Icon }) => {
	return (
		<Link
			to={url}
			className='flex items-center gap-1 text-sm font-semibold cursor-not-allowed text-black transition-all'>
			<Icon className='h-4 w-4 text-[#EF5622]' strokeWidth={2} />
			{label}
		</Link>
	);
};

export default MenuItem;
