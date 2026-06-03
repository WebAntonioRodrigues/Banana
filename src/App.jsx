import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Comun/Navbar';
import Home from './Pages/Home/home';
import "../src/Styles/Style.css";

function App() {
	

  return (
		<BrowserRouter>
			
				<Navbar></Navbar>

				<Routes>
					<Route path='/' element={<Home></Home>} />
			
				</Routes>

				
	
		</BrowserRouter>
	);
}

export default App;
