import React, { PureComponent } from 'react'
import fetch from 'node-fetch'
import { Link } from 'react-router-dom'

export default class extends PureComponent {

    constructor ( props ) {

        super( props )

        this.state = {
            posts: [],
        }

    }

    componentDidMount () {

        return fetch( 'https://jsonplaceholder.typicode.com/posts' )
            .then( resp => resp.json() )
            .then( posts => this.setState( { posts } ) )

    }

    render () {

        const { posts } = this.state

        return (
            <div className='container'>
                <h1>Posts</h1>
                {
                    posts.map( ( post, key ) => {

                        const { id, title, body } = post

                        return (
                            <div className='jumbotron' key={ key }>
                                <h1 className='display-6'>{ title }</h1>
                                <p className='lead'>{ `${body.substring( 0, 20 )}...` }</p>
                                <hr className='my-4' />
                                <p className='lead'>
                                    <Link className="btn btn-primary btn-md" to={ `/post/${id}` }>Read more</Link>
                                </p>
                            </div>
                        )

                    } )
                }
            </div>
        )
    }
}
