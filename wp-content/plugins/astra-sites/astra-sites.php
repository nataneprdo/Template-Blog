<?php
/**
 * Plugin Name: Starter Templates
 * Plugin URI: https://wpastra.com/
 * Description: Starter Templates is all in one solution for complete starter sites, single page templates, blocks & images. This plugin offers the premium library of ready templates & provides quick access to beautiful Pixabay images that can be imported in your website easily.
 * Version: 4.0.3
 * Author: Brainstorm Force
 * Author URI: https://www.brainstormforce.com
 * Text Domain: astra-sites
 *
 * @package Astra Sites
 */

// Check PHP version before loading the plugin.
if ( version_compare( PHP_VERSION, '7.4', '<' ) ) {
	add_action( 'admin_notices', 'astra_sites_php_version_notice' );
	return;
}

/**
 * Display notice if PHP version is below 7.4
 */
function astra_sites_php_version_notice() {
	$plugin_name = 'Starter Templates';
	?>
	<div class="error">
		<p><?php echo esc_html( $plugin_name . ' requires PHP version 7.4 or higher. Please upgrade your PHP version.' ); ?></p>
	</div>
	<?php
}

/**
 * Set constants.
 */
if ( ! defined( 'ASTRA_SITES_NAME' ) ) {
	define( 'ASTRA_SITES_NAME', __( 'Starter Templates', 'astra-sites' ) );
}

if ( ! defined( 'ASTRA_SITES_VER' ) ) {
	define( 'ASTRA_SITES_VER', '4.0.3' );
}

if ( ! defined( 'ASTRA_SITES_FILE' ) ) {
	define( 'ASTRA_SITES_FILE', __FILE__ );
}

if ( ! defined( 'ASTRA_SITES_BASE' ) ) {
	define( 'ASTRA_SITES_BASE', plugin_basename( ASTRA_SITES_FILE ) );
}

if ( ! defined( 'ASTRA_SITES_DIR' ) ) {
	define( 'ASTRA_SITES_DIR', plugin_dir_path( ASTRA_SITES_FILE ) );
}

if ( ! defined( 'ASTRA_SITES_URI' ) ) {
	define( 'ASTRA_SITES_URI', plugins_url( '/', ASTRA_SITES_FILE ) );
}

if ( ! function_exists( 'astra_sites_setup' ) ) :

	/**
	 * Astra Sites Setup
	 *
	 * @since 1.0.5
	 */
	function astra_sites_setup() {
		require_once ASTRA_SITES_DIR . 'inc/classes/class-astra-sites.php';

		// Admin.
		require_once ASTRA_SITES_DIR . 'classes/class-astra-sites-admin.php';
	}

	add_action( 'plugins_loaded', 'astra_sites_setup' );

endif;

// Astra Notices.
require_once ASTRA_SITES_DIR . 'inc/lib/astra-notices/class-astra-notices.php';

// BSF Analytics Tracker.
if ( ! class_exists( 'BSF_Analytics_Loader' ) ) {
	require_once ASTRA_SITES_DIR . 'admin/bsf-analytics/class-bsf-analytics-loader.php';
}

// BSF_Quick_Links.
if ( ! class_exists( 'BSF_Quick_Links' ) ) {
	require_once ASTRA_SITES_DIR . 'inc/lib/bsf-quick-links/class-bsf-quick-links.php';
}

$bsf_analytics = BSF_Analytics_Loader::get_instance();

$bsf_analytics->set_entity(
	array(
		'bsf' => array(
			'product_name'    => __( 'Starter Templates', 'astra-sites' ),
			'path'            => ASTRA_SITES_DIR . 'admin/bsf-analytics',
			'author'          => 'Brainstorm Force',
			'time_to_display' => '+24 hours',
		),
	)
);

if ( ! function_exists( 'astra_pro_sites_activation_redirect' ) ) :

	/**
	 * Astra pro sites activation redirect.
	 *
	 * @param mixed $plugin details of plugin.
	 * @since 3.3.0
	 * @return void
	 */
	function astra_pro_sites_activation_redirect( $plugin ) {
		if ( ( ! defined( 'WP_CLI' ) || ! WP_CLI ) && ( plugin_basename( __FILE__ ) == $plugin ) ) {
			wp_safe_redirect( admin_url( 'themes.php?page=starter-templates' ) );
			exit();
		}
	}

	add_action( 'activated_plugin', 'astra_pro_sites_activation_redirect' );

endif;
