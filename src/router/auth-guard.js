

const isAuthenticatedCuard = async ( to, from, next ) => {
    return new Promise( () => {
        const random = Math.random() * 100

        if ( random > 50 ) {
            console.log('está autenticado')
            next();
        } else {
            console.log('Bloqueado por el isAuthenticadaGuard', random)
            next({ name: 'pokemon-home'})
        }
    })
}


export default isAuthenticatedCuard