/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function Save(props) {
	const {
		attributes: {
			blockId
		},
	} = props;

	const blockProps = useBlockProps.save( {
		className: 'accordion',
	} );

	return (
		<div { ...blockProps }  id={ `block-${ blockId }` }>
			<InnerBlocks.Content />
		</div>
	);
}
