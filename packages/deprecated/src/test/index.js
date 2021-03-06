/**
 * Internal dependencies
 */
import deprecated from '../';

describe( 'deprecated', () => {
	it( 'should show a deprecation warning', () => {
		deprecated( 'Eating meat' );

		expect( console ).toHaveWarnedWith(
			'Eating meat is deprecated and will be removed.'
		);
	} );

	it( 'should show a deprecation warning with a version', () => {
		deprecated( 'Eating meat', { version: 'the future' } );

		expect( console ).toHaveWarnedWith(
			'Eating meat is deprecated and will be removed in the future.'
		);
	} );

	it( 'should show a deprecation warning with an alternative', () => {
		deprecated( 'Eating meat', { version: 'the future', alternative: 'vegetables' } );

		expect( console ).toHaveWarnedWith(
			'Eating meat is deprecated and will be removed in the future. Please use vegetables instead.'
		);
	} );

	it( 'should show a deprecation warning with an alternative specific to a plugin', () => {
		deprecated( 'Eating meat', {
			version: 'the future',
			alternative: 'vegetables',
			plugin: 'the earth',
		} );

		expect( console ).toHaveWarnedWith(
			'Eating meat is deprecated and will be removed from the earth in the future. Please use vegetables instead.'
		);
	} );

	it( 'should show a deprecation warning with a link', () => {
		deprecated( 'Eating meat', {
			version: 'the future',
			alternative: 'vegetables',
			plugin: 'the earth',
			link: 'https://en.wikipedia.org/wiki/Vegetarianism',
		} );

		expect( console ).toHaveWarnedWith(
			'Eating meat is deprecated and will be removed from the earth in the future. Please use vegetables instead. See: https://en.wikipedia.org/wiki/Vegetarianism'
		);
	} );

	it( 'should show a deprecation warning with a hint', () => {
		deprecated( 'Eating meat', {
			version: 'the future',
			alternative: 'vegetables',
			plugin: 'the earth',
			hint: 'You may find it beneficial to transition gradually.',
		} );

		expect( console ).toHaveWarnedWith(
			'Eating meat is deprecated and will be removed from the earth in the future. Please use vegetables instead. Note: You may find it beneficial to transition gradually.'
		);
	} );
} );
