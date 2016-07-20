var token = require( './token.js' );

require( 'slackin' ).default( {
	token: token,
	interval: 10000,
	org: 'codefortucson',
	silent: false
} ).listen( 1337 );
