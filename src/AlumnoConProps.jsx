import React from "react";
import "./assets/styles/Alumno.css";

function AlumnoConProps({ nombre, promedio, inasistencias, estado }) {
	/* let { nombre, promedio, inasistencias, estado } = propiedadesDelAlumno; */

	/* let nombre = propiedadesDelAlumno.nombre;
	let promedio = propiedadesDelAlumno.promedio;
	let inasistencias = propiedadesDelAlumno.inasistencias;
	let estado = propiedadesDelAlumno.estado;
 */
	return (
		<div className="mainContainer ">
			<div className="container">
				<h2 className="titulo">Nombre</h2>
				<div className="valor">{nombre}</div>
			</div>
			<div className="container">
				<h2 className="titulo">Promedio</h2>
				<div className="valor">{promedio}</div>
			</div>
			<div className="container">
				<h2 className="titulo">Inasistencias</h2>
				<div className="valor">{inasistencias}</div>
			</div>
			<div
				className={`estado_container ${
					estado === "Aprobado" ? "aprobado" : "desaprobado"
				}`}
			>
				<h2 className="titulo">Estado</h2>
				<div className="valor">{estado}</div>
			</div>
		</div>
	);
}

export default AlumnoConProps;

/* {alumnos.map((alumno) => {
	return (
		<Alumno
			nombre={alumno.nombre}
			promedio={alumno.promedio}
			inasistencias={alumno.inasistencias}
			estado={alumno.estado}
		/>
	);
})} */
