<?php	
			
// Remove class from body tag without replacing all classes. *********************************************************************

add_filter( 'body_class', function($classes){
	if(in_array("woocommerce-no-js", $classes)) {
		remove_action( 'wp_footer', 'wc_no_js' );
		$classes = array_diff($classes, array('woocommerce-no-js'));
		$classes[] = 'woocommerce-js';
	}
	return array_values($classes);
},10, 1);






// Enqueue inline styles in wordpress ********************************************************************************************


add_action( 'wp_enqueue_scripts', 'cmplz_forminator_css' );
function cmplz_forminator_css() {
		
	$css = 
	
	'
		
		.this_class {			
			height: 70px;
		}		
	
	';
	

	wp_register_style( 'cmplz_forminator', false );
	wp_enqueue_style( 'cmplz_forminator' );
	wp_add_inline_style( 'cmplz_forminator', $css );
}





// Overwrite or remove action from plugin ********************************************************************************************

add_action( 'init', 'remove_style_tags_cmplz' );

function remove_style_tags_cmplz () {
    remove_action('wp_footer', 'cmplz_forminator_css');
}




// Convert HEX to RGB and optionally to RGBA if alpha is provided ********************************************************************************************

if ( ! function_exists( 'roxtar_hex_to_rgb' ) ) {

	function roxtar_hex_to_rgb($color, $opacity = false) {
		
		$default = 'rgb(0,0,0)';

        //Return default if no color provided
        if(empty($color))
              return $default;

        //Sanitize $color if "#" is provided
            if ($color[0] == '#' ) {
                $color = substr( $color, 1 );
            }

            //Check if color has 6 or 3 characters and get values
            if (strlen($color) == 6) {
                    $hex = array( $color[0] . $color[1], $color[2] . $color[3], $color[4] . $color[5] );
            } elseif ( strlen( $color ) == 3 ) {
                    $hex = array( $color[0] . $color[0], $color[1] . $color[1], $color[2] . $color[2] );
            } else {
                    return $default;
            }

            //Convert hexadec to rgb
            $rgb =  array_map('hexdec', $hex);

            //Check if opacity is set(rgba or rgb)
            if($opacity){
                $opacity_value = $opacity / 100;                    
                $output = 'rgba('.implode(",",$rgb).','.$opacity_value.')';
            } else {
                $output = 'rgb('.implode(",",$rgb).')';
            }

			return $output;
		
	}

}










// rewrite all post in custom taxonomy ********************************************************************************************


function skdd_rewrite_rule() {

	// rewrite 'apple-iphone-11-beeldscherm-reparatie' -> /reparaties/apple/iphone-11/beeldscherm-reparatie/


    $args = array(
        'post_type'      => 'product',
        'posts_per_page' => 10,
        'product_cat'    => 'reparaties-detail'
    );

    $loop = new WP_Query( $args );

    while ( $loop->have_posts() ) : $loop->the_post();
		global $post;
    	$page_slug = $post->post_name;		

       	$reparatie_slug = explode('-', $page_slug);

		add_rewrite_rule('reparaties/'.$reparatie_slug[0].'/'.$reparatie_slug[1].'-'.$reparatie_slug[2].'/'.$reparatie_slug[3].'-'.$reparatie_slug[4].'', 'index.php?product=' . $page_slug, 'top');
        
    endwhile;

    wp_reset_query();


 }

 add_action('init', 'skdd_rewrite_rule');


// https://webkul.com/blog/create-a-custom-product-type-in-woocommerce/
