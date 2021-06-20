import "./App.css";
import Nav from "./Nav.js";
import Home from "./Home.js";
import About from "./About.js";
import Projects from "./Projects";

function App() {
	return (
		<div className="App">
			<Nav />
			<Home />
			<About />
			<Projects />
		</div>
	);
}

export default App;
