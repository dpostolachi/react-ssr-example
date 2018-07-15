import React, { PureComponent } from 'react'
import fetch from 'node-fetch'

export default class extends PureComponent {

    constructor ( props ) {

        super( props )

        this.state = {
            title: null,
            body: null,
            comments: [],
        }

    }

    componentDidMount () {

        const { postId } = this.props.match.params

        fetch( `https://jsonplaceholder.typicode.com/posts/${postId}` )
            .then( resp => resp.json() )
            .then( ( post ) => {
                const { title, body } = post
                this.setState( {
                    title,
                    body,
                } )
            } )

        fetch( `https://jsonplaceholder.typicode.com/comments?postId=${postId}` )
            .then( resp => resp.json() )
            .then( ( comments ) => {
                this.setState( {
                    comments: comments.map( ( comment ) => {
                        const { name, body } = comment
                        return {
                            name,
                            body
                        }
                    } )
                } )
            } )

    }

    render () {

        const { title, body, comments } = this.state

        return (
            <div className='container'>
                <h1>{ title }</h1>
                <hr />
                <p>{ body }</p>
                <h4>Comments:</h4>
                {
                    comments.map( ( comment, key ) => {

                        const { name, body } = comment

                        return (
                            <div className='jumbotron' key={ key }>
                                <h1 className='display-10'>{ name }</h1>
                                <p className='lead'>{ body }</p>
                            </div>
                        )

                    } )
                }
            </div>
        )
    }
}
