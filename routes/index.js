import loadable from 'loadable-components'

const Home = {
    path: '/',
    exact: true,
    component: loadable( () => import( 'components/page/home.js' ) ),
}

const Another = {
    path: '/post/:postId',
    exact: true,
    component: loadable( () => import( 'components/page/post.js' ) ),
}

const Page404 = {
    path: '/',
    exact: false,
    component: loadable( () => import( 'components/page/404.js' ) ),
}

export default [
    Home,
    Another,
    Page404
]
