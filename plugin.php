<?php
/**
 * Plugin Name:       Smeedijzer - accordion
 * Description:       Add individual accordion items within an accordion.
 * Requires at least: 5.8
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            Smeedijzer Internet
 * Text Domain:       smeedijzer-block-accordion
 *
 * @package           smeedijzer-block-accordion
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function smeedijzer_block_register() {
	register_block_type( plugin_dir_path( __FILE__ ) . 'blocks/accordion-item/' );
	register_block_type( plugin_dir_path( __FILE__ ) . 'blocks/accordion/' );
}
add_action( 'init', 'smeedijzer_block_register' );
