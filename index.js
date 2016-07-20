var token = process.env.SLACK_API_TOKEN || 'NEED_TOKEN';

require( 'slackin' ).default( {
	token: token,
	interval: 10000,
	org: 'codefortucson',
	silent: false
} ).listen( 80 );
