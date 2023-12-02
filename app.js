// importaciones de paquetes npm y originales
import { 
    inquirerMenu,
    pausa,
    capturaInput,
    listaBorrar,
    confirmaDelet,
    checkboxList,
} from './helpers/inquire.js';
import { guardar, leerTareas } from './helpers/guadarArchivio.js'
import Tareas  from './models/tareas.js';
console.clear();

// funcion principal 
const main = async()=>{
    let option ='';
    // sistema de condicion infinita
    const listTasks = leerTareas();
    const tareas = new Tareas();

    if(listTasks){
        tareas.carcarTarrearArray(listTasks)
    }
    do{
        option = await inquirerMenu();
        switch (option) {
            case 1:
                //crear tarea
                const desc = await capturaInput('descripcion: ');
                tareas.crearTareas(desc);
            break;
            case 2:
                // mostrar todas las tareas :: completa || incompleta
                tareas.tareasSee();
            break;
            case 3:
                // // mostrar tareas completadas
                tareas.tareasCompletadas();
            break;
            case 4:
                // mostrar tareas pendientes
                tareas.tareasPendientes();
            break;
            case 5:
                // hacer tareas pendientes
                const ids = await checkboxList(tareas.listador);
                console.log(ids);
            break;
            case 6:
                // borrar tareas
                const id = await listaBorrar(tareas.listador);
                if(id !== 0){
                    const desicion = await confirmaDelet('¿Estas seguro de eliminar esta tarea?');
                    if(desicion){
                        tareas.eliminacion(id);
                        console.log('Tarea borrada exitosamente')
                    };
                }
            break;
        
        }
        guardar(tareas.listador);
        await pausa(); 
    }while(option !== 0);
}

main();