/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {InnerBlocks, RichText, useBlockProps} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const {
		attributes: {
			innerBlockId,
			title
		},
		clientId,
		setAttributes,
	} = props;

	if (!innerBlockId) {
		setAttributes({innerBlockId: clientId});
	}
	const id = 'block-' + innerBlockId;
	const target = '#block-' + innerBlockId;
	const heading = 'heading-' + innerBlockId;
	const parentBlockClientId = wp.data.select('core/block-editor').getBlockParents(innerBlockId)[0];
	const parentId = '#block-' + parentBlockClientId;

	const blockProps = useBlockProps({
		className: 'accordion-item',
	});

	const ALLOWED_BLOCKS = ['core/paragraph', 'core/list', 'core/button', 'core/buttons'];
	//const noInnerBlocks = wp.data.select( 'core/block-editor' ).getBlocks(blockId).length === 0;

	return (
		<div { ...blockProps }>
			<h2 className="accordion-header" id={heading}>
				<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={target} aria-expanded="false" aria-pressed="false" aria-controls={id}>
					<RichText
						value={title} // Any existing content, either from the database or an attribute default
						allowedFormats={['core/bold', 'core/italic', 'core/link']} // Allow the content to be made bold or italic, but do not allow other formatting options
						onChange={(title) => setAttributes({title})} // Store updated content as a block attribute
						placeholder={__('Panel title...', 'gutenberg-faq')} // Display this text before any content has been added by the user
					/>
				</button>
			</h2>

			<div id={id} className="accordion-collapse collapse show" aria-labelledby={heading} data-bs-parent={parentId}>
				<div className="accordion-body">
					<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
						templateLock={ false }
					/>
				</div>
			</div>
		</div>
	);
}


// // WordPress dependencies
// import { __ } from '@wordpress/i18n';
// import { Component, Fragment } from '@wordpress/element';
// import { withSelect } from '@wordpress/data';
// import { compose } from '@wordpress/compose';
// //import { applyFilters } from '@wordpress/hooks';
//
// import * as BlockEditor from '@wordpress/block-editor';
// import * as Editor from '@wordpress/editor';
//
// const { InnerBlocks, RichText } = BlockEditor || Editor; // Fallback to deprecated '@wordpress/editor' for backwards compatibility
//
// class BootstrapAccordionItemEdit extends Component {
// 	render() {
// 		const {
// 			attributes,
// 			hasSelectedBlock,
// 			clientId,
// 			setAttributes,
// 		} = this.props;
// 		const { title } = attributes;
//
// 		setAttributes( { clientId } );
//
// 		return (
// 			<Fragment>
// 				<RichText
// 					tagName="h2"
// 					className="accordion-header"
// 					placeholder={ __( 'Write a accordion title…' ) }
// 					value={ title }
// 					onChange={ ( value ) => setAttributes( { title: value } ) }
// 				/>
// 				{ hasSelectedBlock && (
// 					<InnerBlocks
// 						templateLock={ false }
// 						renderAppender={ InnerBlocks.ButtonBlockAppender }
// 					/>
// 				) }
// 			</Fragment>
// 		);
// 	}
// }
//
// export default compose(
// 	withSelect( ( select, { clientId, isSelected } ) => {
// 		const { hasSelectedInnerBlock } =
// 		select( 'core/block-editor' ) || select( 'core/editor' );
//
// 		return {
// 			hasSelectedBlock:
// 				hasSelectedInnerBlock( clientId, true ) || isSelected,
// 		};
// 	} )
// )( BootstrapAccordionItemEdit );
