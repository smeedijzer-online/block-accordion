import { SVG, Path } from '@wordpress/components';

function BlockIcon() {
	return (
		<SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
			<Path d="M16.93,8.93a1,1,0,0,1-.7-.29L12,4.41,7.9,8.51A1,1,0,0,1,6.49,7.1L12,1.59l5.64,5.64a1,1,0,0,1,0,1.41A1,1,0,0,1,16.93,8.93Z" />
			<Path d="M12.07,22.35,6.42,16.71a1,1,0,0,1,1.42-1.42l4.23,4.23,4.09-4.1a1,1,0,0,1,1.42,1.42Z" />
			<Path d="M17.93,13H5.82a1,1,0,0,1,0-2H17.93a1,1,0,0,1,0,2Z" />
		</SVG>
	);
}

export default BlockIcon;
