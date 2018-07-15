require( 'babel-register' )
require( 'babel-polyfill' )

const PORT = process.env.PORT || 3000

const server = require( './server' ).default

server( {
    PORT: PORT,
} )
