const {cursos, buscarCurso, mostrarCursos, crearArchivo} = require('./curso');
//const fs = require('fs');

//console.log(mostrarCursos());

const opciones = {
	id:{
		demand: true,
		alias: 'i'
	},
	nombre:{
		demand: true,
		alias: 'n'
	},
	documento:{
		demand: true,
		alias: 'c'
	}
}

const argv = require('yargs')
			.command ('inscribir', 'Prematricular curso', opciones)
			.argv

if (argv._[0] == 'inscribir'){
	let curso = buscarCurso(argv.i);
	if (curso){
		crearArchivo(curso, argv.n, argv.ced);
	}
	else
 	{
 		console.log('El id ingresado no pertenece a ningún curso, por favor intente de nuevo' + '\n');
		mostrarCursos();
 	}

}
else {
 console.log(mostrarCursos());
}