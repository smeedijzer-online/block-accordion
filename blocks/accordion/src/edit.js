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
			blockId
		},
		clientId,
		setAttributes,
	} = props;

	if ( ! blockId ) {
		setAttributes( { blockId: clientId } );
	}

	const blockProps = useBlockProps({
		className: 'accordion',
		id: 'block-' + blockId
	});
	const ALLOWED_BLOCKS = [ 'smeedijzer/accordion-item' ];
	const noInnerBlocks = wp.data.select( 'core/block-editor' ).getBlocks(blockId).length === 0;

	return (
		<div { ...blockProps }>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				template={ [
					[ 'smeedijzer/accordion-item', {} ],
				] }
				templateLock={ false }
			/>
		</div>
	);
}


//
//
//
// // WordPress dependencies
// import { __ } from '@wordpress/i18n';
// import { CheckboxControl, PanelBody } from '@wordpress/components';
// import { Component, Fragment } from '@wordpress/element';
// import { withDispatch, withSelect } from '@wordpress/data';
// import { compose } from '@wordpress/compose';
// //import { applyFilters } from '@wordpress/hooks';
//
// import * as BlockEditor from '@wordpress/block-editor';
// import * as Editor from '@wordpress/editor';
//
// //import { isBootstrap5Active, isCssGridEnabled } from '../helper';
//
// const { InnerBlocks, InspectorControls } = BlockEditor || Editor; // Fallback to deprecated '@wordpress/editor' for backwards compatibility
//
// const ALLOWED_BLOCKS = [ 'smeedijzer/accordion-item' ];
//
// class BootstrapAccordionEdit extends Component {
// 	render() {
// 		const {
// 			attributes,
// 			className,
// 			clientId,
// 			updateAlwaysOpen,
// 			setAttributes,
// 		} = this.props;
// 		const { alwaysOpen } = attributes;
//
// 		setAttributes( { clientId } );
//
// 		return (
// 			<Fragment>
// 				<InspectorControls>
// 					<PanelBody
// 						title={ __(
// 							'Accordion items Options',
// 							'wp-bootstrap-blocks'
// 						) }
// 						initialOpen={ true }
// 					>
// 						<CheckboxControl
// 							label={ __( 'Always open', 'wp-bootstrap-blocks' ) }
// 							checked={ alwaysOpen }
// 							onChange={ updateAlwaysOpen }
// 						/>
// 					</PanelBody>
// 				</InspectorControls>
// 				<div className={ className }>
// 					<InnerBlocks
// 						allowedBlocks={ ALLOWED_BLOCKS }
// 						template={ [
// 							[ 'smeedijzer/accordion-item', {} ],
// 						] }
// 						templateLock={ false }
// 						renderAppender={ InnerBlocks.ButtonBlockAppender }
// 					/>
// 				</div>
// 			</Fragment>
// 		);
// 	}
// }
//
// const applyWithSelect = withSelect( ( select, { clientId } ) => {
// 	const { getBlocksByClientId } =
// 	select( 'core/block-editor' ) || select( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility
//
// 	const items = getBlocksByClientId( clientId )[ 0 ]
// 		? getBlocksByClientId( clientId )[ 0 ].innerBlocks
// 		: [];
//
// 	return {
// 		items,
// 	};
// } );
//
// const applyWithDispatch = withDispatch(
// 	( dispatch, { setAttributes, items, clientId } ) => {
// 		return {
// 			updateAlwaysOpen( alwaysOpen ) {
// 				const { updateBlockAttributes } =
// 				dispatch( 'core/block-editor' ) ||
// 				dispatch( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility
// 				setAttributes( { alwaysOpen } );
// 				items.forEach( ( item ) => {
// 					updateBlockAttributes( item.clientId, {
// 						alwaysOpen,
// 						parentClientId: clientId,
// 					} );
// 				} );
// 			},
// 		};
// 	}
// );
//
// export default compose(
// 	applyWithSelect,
// 	applyWithDispatch
// )( BootstrapAccordionEdit );
