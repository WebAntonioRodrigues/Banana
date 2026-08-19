
import '../../Styles/Home/CoachCard.css';

function CoachCard({ nome, epoca, situacao }) {
	return (
		<div className={`coach-card ${situacao === 'No ativo' ? 'coach-card-ativo' : ''}`}>
			<span className={`coach-ponto ${situacao === 'No ativo' ? 'ponto-ativo' : 'ponto-demitido'}`}></span>
			<div className='coach-card-info'>
				<span className='coach-card-name'>{nome}</span>
				<span className='coach-card-epoca'>{epoca}</span>
			</div>
		</div>
	);
}

export default CoachCard;
