import { loadComponents } from 'loadable-components'
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from 'router/appRouter.js'

const loadableState = window.__LOADABLE_STATE__

loadComponents().then( () => {
    hydrate(
        <BrowserRouter>
            <AppRouter loadableState={ loadableState } />
        </BrowserRouter>
        , document )
} )
