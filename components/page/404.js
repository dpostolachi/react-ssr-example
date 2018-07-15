import React, { PureComponent } from 'react'

export default class extends PureComponent {

    constructor ( props ) {

        super( props )

        props.staticContext.is404 = true

    }

    render () {

        return (
            <h1>404 Not found</h1>
        )

    }

}
