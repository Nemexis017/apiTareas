
const appTareas = ()=>{

}
    
// const tareas = ()=>{
//     console.clear();
//     return new Promise(resolve =>{
//         console.log('================================'.green);
//         console.log('     Seleccione una opción     ');
//         console.log('================================\n'.green);

//         console.log(`${ '1.'.green} Crear tarea`);
//         console.log(`${ '2.'.green} Listar tareas`);
//         console.log(`${ '3.'.green} Listar tareas completadas`);
//         console.log(`${ '4.'.green} Listar tareas pendientes`);
//         console.log(`${ '5.'.green} Completar tarea(s)`);
//         console.log(`${ '6.'.green} Borrar tareas`);
//         console.log(`${ '0.'.green} Salir`);

//         const readline = require('readline').createInterface({
//             input:  process.stdin,
//             output:  process.stdout
//         })

//         readline.question('\nSeleciona una opción: ', (opt)=>{
//             readline.close();
//             resolve(opt);
//         })
//     })

// }

// const pausa = ()=>{

//     return new Promise(resolve =>{
//         const readline = require('readline').createInterface({
//             input:  process.stdin,
//             output:  process.stdout
//         })
//         readline.question(`\nPresione ${'ENTER'.blue} para continuar\n`, (opt)=>{
//             readline.close();
//             resolve();
//         })
//     });
    
// }

// module.exports = {
//     tareas,
//     pausa
// }