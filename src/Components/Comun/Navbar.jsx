import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logos/logo-banana.png';
import '../../Styles/Comun/Navbar.css';

function Navbar() {
	return (
		<nav className='navbar'>
			<div className='navbar-brand'>
				<img src={logo} alt='Benfica' className='navbar-logo' />
				<div className='navbar-titles'>
					<span className='navbar-title'>BENFICA</span>
					<span className='navbar-subtitle'>PRESIDÊNCIA RUI COSTA</span>
				</div>
			</div>
			<div className='navbar-links'>
				<NavLink to='/' className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}>
					Home
				</NavLink>
				<NavLink to='/epocas' className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}>
					Épocas
				</NavLink>
			</div>
		</nav>
	);
}

export default Navbar;
