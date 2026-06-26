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

function App() {
	return (
		<BrowserRouter>
			<Navbar></Navbar>
			<SubNavbar trofeus = {epocas.trofeus}></SubNavbar>

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
