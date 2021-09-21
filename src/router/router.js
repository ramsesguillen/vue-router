import { createRouter, createWebHashHistory } from 'vue-router'
import isAuthenticatedCuard from './auth-guard'


const routes = [
    {
        path: '/',
        redirect: '/pokemon',
        // name: '/',
        // component: ListPage
        component: () => import(/* webpackChunkName: "ListPage"*/'../modules/pokemon/pages/ListPage')
    },
    {
        path: '/pokemon',
        component: () => import(/* webpackChunkName: "AboutPage"*/'../modules/pokemon/layouts/PokemonLayout'),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage"*/'../modules/pokemon/pages/ListPage')
            },
            {
                path: 'about',
                name: 'about',
                component: () => import(/* webpackChunkName: "AboutPage"*/'../modules/pokemon/pages/AboutPage')
            },
            {
                path: 'pokemonid/:id',
                name: 'pokemon-id',
                // component: PokemonPage
                component: () => import(/* webpackChunkName: "PokemonPage"*/'../modules/pokemon/pages/PokemonPage'),
                props: ( route) => {
                    const id = Number( route.params.id )
                    return isNaN( id ) ? { id: 1 } : { id  }
                }
            },
            {
                path: '',
                redirect: { name: 'about' }
            }
        ]
    },

    // DBZ
    {
        path: '/dbz',
        beforeEnter: [isAuthenticatedCuard],
        component: () => import(/* webpackChunkName: "DBz"*/'../modules/dbz/layouts/DragonBallLayout'),
        children: [
            {
                path: 'characters',
                name: 'characters',
                component: () => import(/* webpackChunkName: "AboutPage"*/'../modules/dbz/pages/Characters'),
            },
            {
                path: 'about-dbz',
                name: 'about-dbz',
                component: () => import(/* webpackChunkName: "AboutPage"*/'../modules/dbz/pages/About'),
            },
            {
                path: '',
                redirect: { name: 'characters' }
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import(/* webpackChunkName: "NoPageFound"*/'../modules/shared/pages/NoPageFound')
        // component: NoPageFound
        // redirect: '/'
    },
]



const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


// Guard global - sincrono
// router.beforeEach( ( to, from, next )  => {
//     console.log({ to, from, next})

//     const random = Math.random() * 300
//     if ( random < 50 ) {
//         console.log('autenticado')
//         next()
//     } else {
//         console.log('bloqueado')
//         next({ name: 'pokemon-home'})
//     }
// })

// const canAccess = () => {
//     return new Promise((resolve) => {
//         const random = Math.random() * 300
//         if ( random < 50 ) {
//             console.log('Autenticado')
//             resolve( true )
//         } else {
//             console.log('Bloqueado')
//             resolve( false )
//         }
//     })
// }


// router.beforeEach( async ( to, from, next )  => {
//     const autorized = await canAccess()

//     autorized
//         ? next()
//         : next({ name: 'pokemon-home'})
// })




export default router

