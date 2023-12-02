import fs  from 'fs';

const archivo = './db/data.json';

const guardar = ( data )=>{
    data = fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerTareas = ()=>{
    if(!fs.existsSync( archivo )){
        return null;
    }

    const info = fs.readFileSync(archivo, { encoding: 'utf-8' } );
    const data = JSON.parse(info)
    // console.log(data)
    return data;

}

export {
    guardar,
    leerTareas
}