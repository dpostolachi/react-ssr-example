require( 'babel-register' )
require( 'babel-polyfill' )

const PORT = process.env.PORT || 4021

const server = require( './server' ).default

server( {
    PORT: PORT,
} )
