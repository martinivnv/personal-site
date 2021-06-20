import "./App.css";
import Nav from "./Nav.js";
import Home from "./Home.js";
import About from "./About.js";
import Projects from "./Projects";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

function App() {
	return (
		<div className="App">
			<Nav />
			<Home />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
