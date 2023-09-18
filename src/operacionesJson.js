import * as fs from 'fs';

export const leerJson = () => {

    fs.readFile('./data/archivo.json', (error, contenido) => {
        if (error) console.log(error);
        
        const objeto = JSON.parse(contenido);
        
        console.log(objeto);
    })
}

export const escribirJson = () => {

    const objeto = {
        "nombre": "Diego",
        "apellidos": "Castro",
        "edad": 21,
        "direccion": {
            "calle": "5ta. calle",
            "numero": "1-55",
            "zona": 1,
            "municipio": "Taxisco",
            "departamento": "Santa Rosa"
        }
      };
      
      const contenido = JSON.stringify(objeto, null, 4);

      const path = './data/nuevo2.json';
      
      fs.writeFile(path, contenido, (error) => {
        if (error) console.log(error);
        
        console.log(`El archivo '${path}' se ha creado correctamente.`);
        
      });
}

export const convertirJsonObjeto = () => {

    const path = './data/archivo.json';
    const contenido = fs.readFileSync('./data/archivo.json', 'utf-8');
        var objeto = JSON.parse(contenido);
        
        //console.log(objeto.personas);
        for (const persona of objeto.personas) {
            console.log(persona.nombre +" - " + persona.edad + " años.");

        }

}