import fetch from "node-fetch";
import fs from "fs";

const getAlumnos = async (n) => {
	let alumnos = await fetch(
		`https://randomuser.me/api/?results=${n}&inc=name&nat=ES`
	);
	alumnos = await alumnos.json();
	alumnos = alumnos.results;
	alumnos = alumnos.map((alumno) => {
		let promedio = Math.random() * 10;
		promedio = parseInt(promedio.toFixed(1));

		let inasistencias = Math.floor(Math.random() * 8);
		let estado = promedio > 4 ? "Aprobado" : "Desaprobado";
		let nombre = `${alumno.name.first} ${alumno.name.last}`;
		return {
			nombre,
			promedio,
			inasistencias,
			estado,
		};
	});

	return alumnos;
};

const apialumnos = await getAlumnos(500);
const jsonAlumnos = JSON.stringify(apialumnos);
fs.writeFile("alumnos.json", jsonAlumnos, "utf8", function (err) {
	if (err) {
		console.log("Error");
		return console.log(err);
	}

	console.log("File written");
});
