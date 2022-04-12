import "./assets/styles/App.css";
import Alumno from "./Alumno";
/* import alumnos from "./assets/alumnos.json"; */

function App() {
	return (
		<div className="App">
			<h1>Lista de alumnos</h1>
			<div className="alumnos_container">
				<Alumno />
			</div>
		</div>
	);
}

export default App;
