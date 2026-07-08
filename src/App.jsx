import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Comun/Navbar';
import SubNavbar from './Components/Comun/SubNavbar';
import Home from './Pages/Home';
import Epoca from './Pages/Epoca';
import Epocas from './Pages/Epocas';
import Jogador from './Pages/Jogador';
import Treinador from './Pages/Treinador';
import '../src/Styles/Style.css';
import epocas from './data/epocas.json';



function contarTrofeus(epocas) {
  const todos = epocas.flatMap(epoca => epoca.trofeus);
  return {
    primeiraLiga: todos.filter(t => t === "Primeira Liga").length,
    supertaca: todos.filter(t => t === "Supertaça Cândido de Oliveira").length,
    tacaLiga: todos.filter(t => t === "Taça da Liga").length,
    tacaPortugal: todos.filter(t => t === "Taça de Portugal").length,
    champions: todos.filter(t => t === "Champions League").length,
  };
}


	function App() {
	const trofeusTotais = contarTrofeus(epocas);
	return (
		<BrowserRouter>
			<Navbar></Navbar>
			<SubNavbar trofeus = {trofeusTotais}></SubNavbar>

			<Routes>
				<Route path='/' element={<Home></Home>} />
				<Route path='/epocas' element={<Epocas />} />
				<Route path='/epocas/:id' element={<Epoca />} />
				<Route path='/jogadores/:id' element={<Jogador />} />
				<Route path='/treinadores/:id' element={<Treinador />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
