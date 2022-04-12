import React from "react";
import "./assets/styles/Alumno.css";

function Alumno() {
	return (
		<div className="mainContainer ">
			<div className="container">
				<h2 className="titulo">Nombre</h2>
				<div className="valor">Pepe Fernandez</div>
			</div>
			<div className="container">
				<h2 className="titulo">Promedio</h2>
				<div className="valor">8.5</div>
			</div>
			<div className="container">
				<h2 className="titulo">Inasistencias</h2>
				<div className="valor">4</div>
			</div>
			<div className="estado_container aprobado">
				<h2 className="titulo">Estado</h2>
				<div className="valor">Aprobado</div>
			</div>
		</div>
	);
}

export default Alumno;
