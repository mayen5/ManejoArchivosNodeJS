import { error } from 'console';
import * as fs from 'fs';

export const escribirArchivo = () => {
    const contenido = "Este es el contenido del archivo creado";
    const path = "./data/";
    const nombreArchivo = "archivo.txt";
    fs.writeFile(path+nombreArchivo, contenido, (error) => {
        if(error) console.log(error);
        console.log("El archivo " + nombreArchivo + " se creo correctamente.");
    })
}

export const leerArchivo = () => {
    const path = "./data/";
    const nombreArchivo = "archivo.txt";
    const data = fs.readFileSync(path+nombreArchivo, 'utf-8');
    console.log(data);
}

export const renombrarArchivo = () => {
    const path = './data/';
    const nombreArchivo = 'archivo.txt';
    const nuevoNombreArchivo = 'nuevoarchivo.txt';
    const renameFile = fs.rename(path+nombreArchivo, path+nuevoNombreArchivo, (error) => {
        if(error) throw error;
        console.log("Archivo renombrado exitosamente.");
    });
} 

export const editarArchivo = () => {
    const path = './data/';
    const nombreArchivo = 'nuevoarchivo.txt';
    const nuevocontenido = '\n\n Estamos agregando nuevo contenido editando el archivo.';
    fs.appendFile(path+nombreArchivo, nuevocontenido, (error) => {
        if (error) console.log("Error: " + error);
        else console.log("El archivo se edito correctamente.");
    })
}

export const eliminarArchivo = () =>{
    const path = './data/';
    const nombreArchivo = 'nuevoarchivo.txt';
    fs.unlink(path+nombreArchivo, (error) => {
        if (error) throw error;
        console.log("Archivo eliminado correctamente.");
    })
}

export const copiarArchivo = () => {
    const path = './data/';
    const nombreArchivo = 'nuevoarchivo.txt';
    const nuevoNombreArchivo = 'archivocopiado.txt';
    fs.createReadStream(path+nombreArchivo, (error) => {
        if(error) throw error;
    }).pipe(fs.createWriteStream(path+nuevoNombreArchivo));
    console.log("El archivo se copio correctamente.");
}

export const leerArchivosDirectorio = () => {
    const path = './data/';
    fs.readdir(path, (error, files) => {

        console.log("Archivos en el directorio " + path + " :\n");
        files.forEach( file => {
            console.log(file);
        })
    } )
}

