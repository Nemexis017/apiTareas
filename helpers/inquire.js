import inquirer from 'inquirer'
import colors from 'colors';
// require('colors');

const menuOption = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: 2,
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: 3,
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: 4,
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: 5,
                name: `${'5.'.green} Completar tarea`
            },
            {
                value: 6,
                name: `${'6.'.green} Borrar tarea`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`
            },
        ]
    }
];

const inquirerMenu = async()=>{
    console.clear();
    console.log('================================'.green);
    console.log('     Seleccione una opción     ');
    console.log('================================\n'.green);

    const { opcion } = await inquirer.prompt(menuOption);
    return opcion;
}

const pausa = async()=>{
    const enter = [
        {
            type: 'input', 
            name: 'enter',
            message: `\nPresione ${ 'ENTER'.blue } para continuar`,
        }
    ]

    const continuar = inquirer.prompt(enter); 
    return continuar;
}

const capturaInput = async( message )=>{
    const question  = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if(value.length === 0){
                    return 'Ingrese un valor'
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listaBorrar = async(tarea = [])=>{
    const choices = tarea.map((tareas, i) =>{
        const idx = `${i + 1}`.green;
        return {
            value: tareas.id,
            name: `${idx} ${tareas.desc}`,
        }
    });
    choices.unshift ({
        value:0,
        name: `${'0.'.green} Cancelar`
    })
    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id }= await inquire.prompt(question);
    return id;
}

const confirmaDelet = async(message)=>{
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message,
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const checkboxList = async(tarea = [])=>{
    const choices = tarea.map((tareas, i) =>{
        const idx = `${i + 1}`.green;
        return {
            value: tareas.id,
            name: `${idx} ${tareas.desc}`,
            checked: true,
        }
    });
    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleciones',
            choices
        }
    ]

    const { ids }= await inquirer.prompt(question);
    return ids;
}

export {
    inquirerMenu,
    pausa,
    capturaInput, 
    listaBorrar,
    confirmaDelet,
    checkboxList,
}