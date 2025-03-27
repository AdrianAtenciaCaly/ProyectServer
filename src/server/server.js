import express from 'express';
import patch from 'path'

export const startServer=(options)=>{
    const {port,public_patch= 'public'} = options
    const app = express()
    //Para poder user Middleware se usa la palabra use
    app.use(express.static(public_patch))//Contenido estatico qu esta diponible para usar.
    app.get('*',(req,res)=>{
        const indexPath = patch.join(__dirname, `../../../${public_patch}/index.html`)  
        res.sendFile(indexPath)
     })
     app.listen(port,()=>{
        console.log(`Escuchando en el puerto : ${port}`)
     })
}

