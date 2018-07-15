import React, { PureComponent } from 'react'
import Header from 'components/controls/header'

export default class Layout extends PureComponent {

    render () {

        const { loadableState } = this.props

        return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <title>Hello</title>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
                </head>
                <body>
                    <Header />
                    { ...this.props.children }
                    {
                        ( loadableState === null ) ? null
                            : ( loadableState.getScriptElement ) ? loadableState.getScriptElement()
                                : <script dangerouslySetInnerHTML={ { __html: `window.__LOADABLE_STATE__ = ${JSON.stringify( loadableState, { isJSON: true } )};` } } />
                    }
                    <script src="/public/dist/vendor.js" defer />
                    <script src="/public/dist/client.js" defer />
                </body>
            </html>
        )
    }

}
