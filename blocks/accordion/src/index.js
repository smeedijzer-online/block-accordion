/**
 * WordPress dependencies
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';
import BlockIcon from './block-icon';
import metadata from './../block.json';

/**
 * Registering block type.
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
// https://github.com/godaddy-wordpress/coblocks/blob/master/src/blocks/accordion/accordion-item/index.js
// https://wordpress.stackexchange.com/questions/346562/file-structure-and-react-setup-when-creating-multiple-gutenberg-blocks
// https://github.com/10up/maps-block-apple/blob/develop/src/index.js
registerBlockType( metadata, {
	icon: BlockIcon,
	attributes: {
		...metadata.attributes,
	},
	edit: Edit,
	save: Save,
} );
