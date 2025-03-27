const {envs} = require('./config/env')
const {startServer} = require('./server/server')

const main=()=>{
    startServer({
        port: envs.PORT,
        public_patch:envs.PUBLIC_PATCH
    })
    }
    
//Funcion Agnostica autoconvocada
(async ()=>{
    main();
})()

