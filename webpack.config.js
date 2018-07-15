const path = require( 'path' )

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const webpack = require( 'webpack' )

const Env = ( process.env.NODE_ENV ) ? process.env.NODE_ENV : 'development'
const Analyze = ( process.env.ANALYZE ) ? true : false

console.log( 'Running Webpack: ' + Env )

const PATHS = {
    input: path.join( __dirname, `/client/index.js` ),
    output: path.join( __dirname, `/public/dist` ),
    src: path.join( __dirname, `/client` ),
}

const plugins = [
    new webpack.DefinePlugin( {
        'process.env': {
            'NODE_ENV': JSON.stringify( Env )
        }
    } ),
]

if ( Env === 'production' )
    plugins.push( new webpack.optimize.UglifyJsPlugin() )

if ( Analyze )
    plugins.push( new BundleAnalyzerPlugin() )

module.exports = {
    context: PATHS.src,
    target: 'web',
    mode: Env,
    entry: {
        client: [ PATHS.input ],
        vendor: [ 'react', 'react-dom', 'react-router-dom', 'react-router' ]
    },
    output: {
        path: PATHS.output,
        filename: '[name].js',
        publicPath: `/public/dist/`
    },
    resolve: {
        modules: [ 'node_modules', 'src' ],
        extensions: [ '*', '.js', '.json' ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "initial",
            test: "vendor",
            name: "vendor",
            enforce: true
          }
        }
      }
    },
    devtool: ( Env !== 'production ' ) ? 'source-map' : false,
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            },
            {
                test: /(\.jsx?$|\.js?$)/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                  'url-loader?limit=10000',
                  'img-loader'
                ]
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
        ]
    },
    plugins: plugins
}
