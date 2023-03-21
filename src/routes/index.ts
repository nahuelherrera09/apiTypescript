import { Router } from "express";
import { readdirSync } from "fs"

const PATH_ROUTER = `${__dirname}`
const router = Router();


//Función para eliminar el .ts del nombre del archivo
const cleanFileName = (fileName: string) =>{
    const file = fileName.split('.').shift()
    return file;
}


// funcion para importar dinamicamente las rutas
readdirSync(PATH_ROUTER).filter((fileName)=>{
    const cleanName = cleanFileName(fileName);
    if(cleanName !== "index"){
        import(`./${cleanName}`).then((moduleRouter)=>{
            console.log(`se está cargando la ruta ... /${cleanName}`)
            router.use(`/${cleanName}`, moduleRouter.router)
        })    
    }
    console.log(cleanFileName(fileName))
})

export { router }