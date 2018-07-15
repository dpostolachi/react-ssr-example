import React from 'react'
import koaRouter from 'koa-router'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import AppRouter from 'router/appRouter'
import { getLoadableState } from 'loadable-components/server'

const Router = new koaRouter()

Router.get( '/*', async ( ctx ) => {

    const context = {}

    const GenApp = ( loadableState ) =>  {
        return (
            <StaticRouter location={ ctx.url } context={ context }>
                <AppRouter loadableState={ loadableState } />
            </StaticRouter>
        )
    }

    const loadableState = await getLoadableState( GenApp( null ) )
    const html = renderToString( GenApp( loadableState ) )

    if ( context.is404 )
        ctx.status = 404

    ctx.body = `<!DOCTYPE html>${html}`

} )

export default Router
