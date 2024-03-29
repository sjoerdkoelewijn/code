// This is how you add a custom property to a WP block (under advanced in the sidebar)
// In this case it shows a toggle button to shuffle the values in the ghostkit carousel
// Enqueue this script to enqueue_block_editor_assets 
// https://awhitepixel.com/blog/add-custom-settings-to-existing-wordpress-gutenberg-blocks/


function addshuffleAttribute(settings, name) {
	if (typeof settings.attributes !== 'undefined') {
		if (name == 'ghostkit/carousel') {
			settings.attributes = Object.assign(settings.attributes, {
				shuffleOrder: {
					type: 'boolean',
				}
			});
		}
	}
	return settings;
}
 
wp.hooks.addFilter(
	'blocks.registerBlockType',
	'skdd/shuffle-custom-attribute',
	addshuffleAttribute
);




const carouselAdvancedControls = wp.compose.createHigherOrderComponent((BlockEdit) => {
	return (props) => {
		const { Fragment } = wp.element;
		const { ToggleControl } = wp.components;
		const { InspectorAdvancedControls } = wp.blockEditor;
		const { attributes, setAttributes, isSelected } = props;
		return (
			React.createElement(Fragment, null, 
                React.createElement(BlockEdit, props), 
                isSelected && props.name == 'ghostkit/carousel' && 
                React.createElement(InspectorAdvancedControls, null, 
                React.createElement(ToggleControl, {
                    label: wp.i18n.__('Shuffle Order', 'skdd'),
                    checked: !!attributes.shuffleOrder,
                    onChange: newval => setAttributes({
                    shuffleOrder: !attributes.shuffleOrder
                })
              })))
		);
	};
}, 'carouselAdvancedControls');
 
wp.hooks.addFilter(
	'editor.BlockEdit',
	'skdd/carousel-advanced-control',
	carouselAdvancedControls
);



function carouselApplyExtraClass(extraProps, blockType, attributes) {
	const { shuffleOrder } = attributes;
 
	if (typeof shuffleOrder !== 'undefined' && shuffleOrder) {
		extraProps.className = extraProps.className + ' is-style-order-random';
	}
	return extraProps;
}
 
wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'skdd/carousel-apply-class',
	carouselApplyExtraClass
);
