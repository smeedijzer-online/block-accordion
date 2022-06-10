/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * WordPress dependencies
 */
import {InnerBlocks, RichText, useBlockProps} from '@wordpress/block-editor';

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
			parentClientId,
			innerBlockId,
			title
		},
	} = props;

	const id = 'block-' + innerBlockId;
	const target = '#block-' + innerBlockId;
	const heading = 'heading-' + innerBlockId;
	const parentBlockClientId = parentClientId; //wp.data.select('core/block-editor').getBlockParents(innerBlockId)[0];
	const parentId = '#block-' + parentBlockClientId;

	console.log('clientId (Save): ' + innerBlockId);
	console.log('parentBlockClientId (Save): ' + parentClientId);

	const blockProps = useBlockProps.save( {
		className: 'accordion-item'
	} );

	return (
		<div { ...blockProps }>
			<h3 className="accordion-header" id={heading}>
				<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="false" aria-controls={id}>
					<RichText.Content value={title}/>
				</button>
			</h3>

			<div id={id} className="accordion-collapse collapse" aria-labelledby={heading} data-bs-parent={parentId}>
				<div className="accordion-body">
					<InnerBlocks.Content/>
				</div>
			</div>
		</div>
	);
}
