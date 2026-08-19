import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CoachCard from './CoachCard';
import '../../Styles/Home/Bottom.css';
import '../../Styles/Comun/barra.css';

function Bottom() {
	const [treinadores, setTreinadores] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/api/treinadores')
			.then(res => res.json())
			.then(data => setTreinadores(data))
			.catch(err => console.error('Erro ao obter treinadores:', err));
	}, []);

	return (
		<section className='bottom-section'>
			<div className='bottom-box'>
				<span className='bottom-title'>Treinadores</span>
				<span className='bottom-subtitle'>Utilizados</span>
				<div className='barra-dourada'></div>
			</div>
			<div className='coach-list'>
				{treinadores.map(treinador => (
					<Link key={treinador.id} to={`/treinadores/${treinador.id}`} style={{ textDecoration: 'none' }}>
						<CoachCard nome={treinador.nome} epoca={treinador.epocas} situacao={treinador.situacao} />
					</Link>
				))}
			</div>
		</section>
	);
}

export default Bottom;
