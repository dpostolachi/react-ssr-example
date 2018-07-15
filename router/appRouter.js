import React from 'react'
import Routes from 'routes'
import AppLayout from 'components/layout'
import { Switch, Route } from 'react-router'

export default ( props ) => {

    return (
        <AppLayout { ...props }>
            <Switch>
                {
                    Routes.map( ( route, key ) => {

                        const { component, path } = route
                        const exact = route.exact || false
                        const strict = route.strict || false

                        return <Route component={ component } path={ path } exact={ exact } strict={ strict } key={ key } />

                    } )
                }
            </Switch>
        </AppLayout>
    )

}
