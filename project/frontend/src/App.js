import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Task1 from "./components/task1";
import Task2 from "./components/task2";
import Task3 from "./components/task3";
import Task4 from "./components/task4";
import Task5 from "./components/task5";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/task1" element={<Task1 />} />
					<Route path="/task2" element={<Task2 />} />
					<Route path="/task3" element={<Task3 />} />
					<Route path="/task4" element={<Task4 />} />
					<Route path="/task5" element={<Task5 />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
