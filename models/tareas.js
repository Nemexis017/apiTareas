import {Tarea as tarea} from './tarea.js';
import colors from 'colors';

class Tareas{
    _listado = {};
    
    get listador(){
        const lista = [];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            lista.push(tarea)
            
        }); 
        
        return lista; 
    };
    
    constructor() {
        this._listado = {};
    }

    eliminacion(id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }


    carcarTarrearArray( tarea = []){
        tarea.forEach(tareas=>{
            this._listado[tareas.id] = tareas;
        });
    }

    crearTareas(desc = ''){
        const tarea = new Tarea(desc); 
        this._listado[tarea.id] = tarea;
    }

    tareasSee(){
        console.log();
        this.listador.forEach((tarea, i)=>{
            const numeroTasks = `${i + 1}.`.green;
            const {desc, completadoEn } = tarea;
            let comprobante = (completadoEn == null)
                                ?`${'Pendiente'.red}`
                                :`${'Completada'.green}`;
            
            console.log(`  ${numeroTasks} ${desc} :: ${comprobante}`)
        } )
    }

    tareasPendientes(){
        console.log();
        let numero = 0;
        this.listador.forEach((tarea, i)=>{
            // const numeroTasks = `${i + 1}.`.green;
            const {desc, completadoEn} = tarea;
            if(completadoEn === null){
                console.log(`  ${numero}. ${desc} :: ${'Pendiente'.red}`)
            }
            numero++;
        })

    }

    tareasCompletadas(){
        console.log();
        let numero = 1;
        this.listador.forEach((tarea)=>{
            const {desc, completadoEn} = tarea;
            if(completadoEn !== null){
                console.log(`  ${numero}. ${desc} :: ${'Completada'.green} \n`)
            }
            numero++;
        })
    }
}

export { Tareas };