import {envs} from './config/env.js'
import {startServer} from './server/server.js'

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

