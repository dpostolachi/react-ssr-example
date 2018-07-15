import mount from 'koa-mount'
import serve from 'koa-static'

export default mount( '/public', serve( './public' ) )
