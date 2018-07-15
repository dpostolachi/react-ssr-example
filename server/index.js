import Koa from 'koa'
import AppRouter from 'router'
import AppStatic from 'server/static'

import conditional from 'koa-conditional-get'
import etag from 'koa-etag'
import compress from 'koa-compress'

const app = new Koa()

app
    .use( conditional() )
    .use( etag() )
    .use( compress() )
    .use( AppStatic )
    .use( AppRouter.routes() )
    .use( AppRouter.allowedMethods() )

export default ( { PORT } ) => {

    console.log( 'Listening on port', PORT )
    
    app.listen( PORT )

}
